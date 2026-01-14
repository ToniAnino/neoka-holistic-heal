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

  // Increment views
  const incrementViews = useCallback(async () => {
    try {
      // Check if stats exist
      const { data: existing } = await supabase
        .from("posts_stats")
        .select("id, views")
        .eq("post_id", postId)
        .maybeSingle();

      if (existing) {
        await supabase
          .from("posts_stats")
          .update({ views: existing.views + 1 })
          .eq("post_id", postId);
      } else {
        await supabase
          .from("posts_stats")
          .insert({ post_id: postId, views: 1, likes: 0 });
      }

      setStats((prev) => ({ ...prev, views: prev.views + 1 }));
    } catch (error) {
      console.error("Error incrementing views:", error);
    }
  }, [postId]);

  // Toggle like
  const toggleLike = useCallback(async () => {
    try {
      const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      const alreadyLiked = likedPosts.includes(postId);

      // Check if stats exist
      const { data: existing } = await supabase
        .from("posts_stats")
        .select("id, likes")
        .eq("post_id", postId)
        .maybeSingle();

      const newLikeCount = alreadyLiked
        ? Math.max(0, (existing?.likes || 1) - 1)
        : (existing?.likes || 0) + 1;

      if (existing) {
        await supabase
          .from("posts_stats")
          .update({ likes: newLikeCount })
          .eq("post_id", postId);
      } else {
        await supabase
          .from("posts_stats")
          .insert({ post_id: postId, views: 0, likes: 1 });
      }

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
        likes: newLikeCount,
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
