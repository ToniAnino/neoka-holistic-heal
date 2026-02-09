import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { X, Eye, MessageCircle, Heart, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/data/blogPosts";
import { useComments } from "@/hooks/useComments";
import { useBlogStats } from "@/hooks/useBlogStats";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { comments, loading: commentsLoading, addComment } = useComments(post?.slug || "");
  const { stats, isLiked, incrementViews, toggleLike } = useBlogStats(post?.slug || "");

  useEffect(() => {
    if (post) {
      const viewedPosts = JSON.parse(sessionStorage.getItem("viewedPosts") || "[]");
      if (!viewedPosts.includes(post.slug)) {
        incrementViews();
        sessionStorage.setItem("viewedPosts", JSON.stringify([...viewedPosts, post.slug]));
      }
    }
  }, [post, incrementViews]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim() || isSubmitting) return;
    setIsSubmitting(true);
    await addComment(authorName, newComment);
    setNewComment("");
    setIsSubmitting(false);
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Neoka",
      "url": "https://centroneoka.es"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Neoka - Centro de Psicología en Huelva",
      "url": "https://centroneoka.es"
    },
    "mainEntityOfPage": `https://centroneoka.es/blog/${post.slug}`
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://centroneoka.es/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`https://centroneoka.es/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
      </Helmet>
      <Header />
      
      <article className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header Image */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="text-primary font-semibold text-sm">Neoka B.G</span>
              <h1 className="text-white text-2xl md:text-3xl font-bold mt-1">{post.title}</h1>
              <span className="text-white/80 text-sm">{post.date} · {post.readTime}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-1"><Eye className="w-4 h-4" /><span>{stats.views}</span></div>
            <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /><span>{stats.comments}</span></div>
            <button onClick={toggleLike} className={`flex items-center gap-1 ml-auto transition-colors ${isLiked ? "text-red-500" : "text-muted-foreground hover:text-red-500"}`}>
              <span>{stats.likes}</span>
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12 [&>p]:text-foreground/80 [&>p]:leading-relaxed [&>p]:mb-4 [&_strong]:text-foreground [&_strong]:font-semibold [&_em]:italic [&_a]:text-primary [&_a:hover]:underline [&_img]:rounded-lg [&_img]:shadow-md">
            {post.content}
          </div>

          {/* Comments */}
          <div className="border-t border-border pt-6">
            <h3 className="font-semibold text-lg mb-4">Comentarios ({comments.length})</h3>
            {commentsLoading ? (
              <div className="text-center py-4 text-muted-foreground">Cargando comentarios...</div>
            ) : comments.length > 0 ? (
              <div className="space-y-4 mb-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{comment.user_name}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(comment.created_at).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <p className="text-foreground/80 text-sm">{comment.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm mb-6">Sé el primero en comentar...</p>
            )}
            <form onSubmit={handleSubmitComment} className="space-y-3">
              <input type="text" placeholder="Tu nombre" value={authorName} onChange={(e) => setAuthorName(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <div className="flex gap-2">
                <input type="text" placeholder="Escribe un comentario..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <Button type="submit" size="icon" className="shrink-0" disabled={isSubmitting}><Send className="w-4 h-4" /></Button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center">
            <Link to="/blog" className="text-primary hover:underline">← Volver al blog</Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default BlogPost;
