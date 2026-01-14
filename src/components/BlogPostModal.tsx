import { X, Eye, MessageCircle, Heart, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useComments } from "@/hooks/useComments";
import { useBlogStats } from "@/hooks/useBlogStats";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  content?: React.ReactNode;
}

interface BlogPostModalProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
  onStatsUpdate?: () => void;
}

export const BlogPostModal = ({
  post,
  isOpen,
  onClose,
  onStatsUpdate,
}: BlogPostModalProps) => {
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { comments, loading: commentsLoading, addComment } = useComments(post.slug);
  const { stats, isLiked, incrementViews, toggleLike } = useBlogStats(post.slug);

  // Increment views when modal opens
  useEffect(() => {
    if (isOpen) {
      // Check if already viewed in this session
      const viewedPosts = JSON.parse(sessionStorage.getItem("viewedPosts") || "[]");
      if (!viewedPosts.includes(post.slug)) {
        incrementViews();
        sessionStorage.setItem("viewedPosts", JSON.stringify([...viewedPosts, post.slug]));
      }
    }
  }, [isOpen, post.slug, incrementViews]);

  if (!isOpen) return null;

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const success = await addComment(authorName, newComment);
    if (success) {
      setNewComment("");
      onStatsUpdate?.();
    }
    setIsSubmitting(false);
  };

  const handleLike = async () => {
    await toggleLike();
    onStatsUpdate?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fade-up">
        {/* Header Image */}
        <div className="relative h-64">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <span className="text-primary font-semibold text-sm">Neoka B.G</span>
            <h2 className="text-white text-2xl font-bold mt-1">{post.title}</h2>
            <span className="text-white/80 text-sm">
              {post.date} · {post.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
          {/* Stats */}
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{stats.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{stats.comments}</span>
            </div>
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 ml-auto transition-colors ${
                isLiked ? "text-red-500" : "text-muted-foreground hover:text-red-500"
              }`}
            >
              <span>{stats.likes}</span>
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Post Content */}
          <div className="prose prose-sm max-w-none mb-8 [&>p]:text-foreground/80 [&>p]:leading-relaxed [&>p]:mb-4 [&_strong]:text-foreground [&_strong]:font-semibold [&_em]:italic [&_a]:text-primary [&_a:hover]:underline [&_img]:rounded-lg [&_img]:shadow-md">
            {post.content ? (
              post.content
            ) : (
              <p className="text-foreground/80 leading-relaxed">
                Contenido del artículo próximamente disponible...
              </p>
            )}
          </div>

          {/* Comments Section */}
          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-lg mb-4">
              Comentarios ({comments.length})
            </h3>

            {/* Comment List */}
            {commentsLoading ? (
              <div className="text-center py-4 text-muted-foreground">
                Cargando comentarios...
              </div>
            ) : comments.length > 0 ? (
              <div className="space-y-4 mb-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-muted/50 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {comment.user_name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(comment.created_at).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-foreground/80 text-sm">{comment.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm mb-6">
                Sé el primero en comentar...
              </p>
            )}

            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="space-y-3">
              <input
                type="text"
                placeholder="Tu nombre"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe un comentario..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button type="submit" size="icon" className="shrink-0" disabled={isSubmitting}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
