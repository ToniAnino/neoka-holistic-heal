import { Eye, MessageCircle, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BlogPostModal } from "./BlogPostModal";
import { useAllBlogStats } from "@/hooks/useAllBlogStats";
import { blogPosts } from "@/data/blogPosts";

export const BlogSection = () => {
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const postSlugs = blogPosts.map(p => p.slug);
  const { allStats, likedPosts, toggleLike, updateCommentCount, refetchStats } = useAllBlogStats(postSlugs);

  // Check if URL matches a blog post on mount (for refresh with modal open)
  useEffect(() => {
    const match = location.pathname.match(/^\/blog\/(.+)$/);
    if (match) {
      const slug = match[1];
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        setSelectedPostSlug(slug);
      }
    }
  }, [location.pathname]);

  const handleOpenPost = (slug: string) => {
    setSelectedPostSlug(slug);
    window.history.pushState({}, "", `/blog/${slug}`);
  };

  const handleClosePost = () => {
    setSelectedPostSlug(null);
    window.history.pushState({}, "", "/#blog");
  };

  const handleLike = async (postSlug: string) => {
    await toggleLike(postSlug);
  };

  const handleStatsUpdate = () => {
    refetchStats();
  };

  const selectedPost = selectedPostSlug ? blogPosts.find(p => p.slug === selectedPostSlug) : null;

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="bg-primary py-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground text-center">
          Nuestro blog
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogPosts.map((post) => {
            const stats = allStats[post.slug] || { views: 0, likes: 0, comments: 0 };
            const isLiked = likedPosts.has(post.slug);
            
            return (
              <article
                key={post.id}
                className="group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleOpenPost(post.slug)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-semibold text-sm">Neoka B.G</span>
                    <span className="text-white/80 text-xs">{post.date} · {post.readTime}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{stats.comments}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(post.slug);
                        }}
                        className={`flex items-center gap-1 ml-auto transition-colors ${
                          isLiked ? "text-red-400" : "text-white/80 hover:text-red-400"
                        }`}
                      >
                        <span>{stats.likes}</span>
                        <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Ver todos los artículos
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>

      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          isOpen={!!selectedPost}
          onClose={handleClosePost}
          onStatsUpdate={handleStatsUpdate}
        />
      )}
    </section>
  );
};
