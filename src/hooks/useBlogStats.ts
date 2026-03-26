import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface PostStats {
  views: number;
  likes: number;
  comments: number;
}

export const useBlogStats = (postId: string) => {
  const [stats, setStats] = useState<PostStats>({ views: 0, likes: 0, comments: 0 });
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if user already liked (using localStorage for anonymous users)
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setIsLiked(likedPosts.includes(postId));
  }, [postId]);

  // Fetch stats from database
  const fetchStats = useCallback(async () => {
    try {
      // Fetch post stats
      const { data: statsData } = await supabase
        .from("posts_stats")
        .select("views, likes")
        .eq("post_id", postId)
        .maybeSingle();

      // Fetch comments count
      const { count: commentsCount } = await supabase
        .from("comments")
        .select("*", { count: "exact", head: true })
        .eq("post_id", postId);

      setStats({
        views: statsData?.views || 0,
        likes: statsData?.likes || 0,
        comments: commentsCount || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Increment views via secure RPC
  const incrementViews = useCallback(async () => {
    try {
      await supabase.rpc("increment_post_views", { p_post_id: postId });
      setStats((prev) => ({ ...prev, views: prev.views + 1 }));
    } catch (error) {
      console.error("Error incrementing views:", error);
    }
  }, [postId]);

  // Toggle like via secure RPC
  const toggleLike = useCallback(async () => {
    try {
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      const alreadyLiked = likedPosts.includes(postId);

      const { data: newLikeCount } = await supabase.rpc("toggle_post_like", {
        p_post_id: postId,
        p_increment: !alreadyLiked,
      });

      // Update localStorage
      if (alreadyLiked) {
        localStorage.setItem(
          "likedPosts",
          JSON.stringify(likedPosts.filter((id: string) => id !== postId))
        );
      } else {
        localStorage.setItem(
          "likedPosts",
          JSON.stringify([...likedPosts, postId])
        );
      }

      setIsLiked(!alreadyLiked);
      setStats((prev) => ({
        ...prev,
        likes: newLikeCount ?? prev.likes,
      }));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  }, [postId]);

  return {
    stats,
    isLiked,
    loading,
    incrementViews,
    toggleLike,
    refetchStats: fetchStats,
  };
};
