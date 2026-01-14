import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AllStats {
  [postId: string]: {
    views: number;
    likes: number;
    comments: number;
  };
}

export const useAllBlogStats = (postIds: string[]) => {
  const [allStats, setAllStats] = useState<AllStats>({});
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Load liked posts from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    setLikedPosts(new Set(stored));
  }, []);

  // Fetch all stats
  const fetchAllStats = useCallback(async () => {
    if (postIds.length === 0) return;

    try {
      // Fetch all post stats
      const { data: statsData } = await supabase
        .from("posts_stats")
        .select("post_id, views, likes")
        .in("post_id", postIds);

      // Fetch all comments counts
      const { data: commentsData } = await supabase
        .from("comments")
        .select("post_id")
        .in("post_id", postIds);

      // Count comments per post
      const commentCounts: { [key: string]: number } = {};
      commentsData?.forEach((c) => {
        commentCounts[c.post_id] = (commentCounts[c.post_id] || 0) + 1;
      });

      // Build stats object
      const stats: AllStats = {};
      postIds.forEach((id) => {
        const postStats = statsData?.find((s) => s.post_id === id);
        stats[id] = {
          views: postStats?.views || 0,
          likes: postStats?.likes || 0,
          comments: commentCounts[id] || 0,
        };
      });

      setAllStats(stats);
    } catch (error) {
      console.error("Error fetching all stats:", error);
    } finally {
      setLoading(false);
    }
  }, [postIds]);

  useEffect(() => {
    fetchAllStats();
  }, [fetchAllStats]);

  // Toggle like for a specific post
  const toggleLike = useCallback(async (postId: string) => {
    try {
      const stored = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      const alreadyLiked = stored.includes(postId);

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
        const newStored = stored.filter((id: string) => id !== postId);
        localStorage.setItem("likedPosts", JSON.stringify(newStored));
        setLikedPosts(new Set(newStored));
      } else {
        const newStored = [...stored, postId];
        localStorage.setItem("likedPosts", JSON.stringify(newStored));
        setLikedPosts(new Set(newStored));
      }

      setAllStats((prev) => ({
        ...prev,
        [postId]: {
          ...prev[postId],
          likes: newLikeCount,
        },
      }));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  }, []);

  // Increment views for a specific post
  const incrementViews = useCallback(async (postId: string) => {
    try {
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

      setAllStats((prev) => ({
        ...prev,
        [postId]: {
          ...prev[postId],
          views: (prev[postId]?.views || 0) + 1,
        },
      }));
    } catch (error) {
      console.error("Error incrementing views:", error);
    }
  }, []);

  // Update comment count
  const updateCommentCount = useCallback((postId: string) => {
    setAllStats((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        comments: (prev[postId]?.comments || 0) + 1,
      },
    }));
  }, []);

  return {
    allStats,
    likedPosts,
    loading,
    toggleLike,
    incrementViews,
    updateCommentCount,
    refetchStats: fetchAllStats,
  };
};
