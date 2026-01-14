import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Comment {
  id: string;
  post_id: string;
  user_name: string;
  content: string;
  created_at: string;
}

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch comments
  const fetchComments = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", postId)
        .order("created_at", { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  // Subscribe to realtime comments
  useEffect(() => {
    const channel = supabase
      .channel(`comments-${postId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "comments",
          filter: `post_id=eq.${postId}`,
        },
        (payload) => {
          console.log("New comment received:", payload);
          setComments((prev) => [...prev, payload.new as Comment]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [postId]);

  // Add comment
  const addComment = useCallback(
    async (userName: string, content: string) => {
      try {
        const { error } = await supabase.from("comments").insert({
          post_id: postId,
          user_name: userName.trim(),
          content: content.trim(),
        });

        if (error) throw error;
        // Comment will be added via realtime subscription
        return true;
      } catch (error) {
        console.error("Error adding comment:", error);
        return false;
      }
    },
    [postId]
  );

  return {
    comments,
    loading,
    addComment,
    refetchComments: fetchComments,
  };
};
