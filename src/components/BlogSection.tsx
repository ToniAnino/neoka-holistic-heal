import { Eye, MessageCircle, Heart } from "lucide-react";
import { useState } from "react";
import { BlogPostModal } from "./BlogPostModal";

const initialBlogPosts = [
  {
    id: 1,
    title: "El amor se ha perdido.",
    date: "8 may 2024",
    readTime: "6 Min. de lectura",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
    views: 22,
    comments: 0,
    likes: 1,
  },
  {
    id: 2,
    title: "Mirar hacia otro lado",
    date: "1 may 2024",
    readTime: "5 Min. de lectura",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    views: 354,
    comments: 0,
    likes: 11,
  },
  {
    id: 3,
    title: "La importancia del compromiso.",
    date: "11 oct 2023",
    readTime: "8 Min. de lectura",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    views: 462,
    comments: 0,
    likes: 4,
  },
  {
    id: 4,
    title: "Perderse - Encontrarse = Catarsis.",
    date: "8 jun 2023",
    readTime: "7 Min. de lectura",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
    views: 352,
    comments: 0,
    likes: 24,
  },
  {
    id: 5,
    title: "Bendito 2020.",
    date: "11 dic 2020",
    readTime: "7 Min. de lectura",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    views: 478,
    comments: 0,
    likes: 8,
  },
  {
    id: 6,
    title: "Ídolos del circo.",
    date: "20 sept 2020",
    readTime: "3 Min. de lectura",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
    views: 69,
    comments: 0,
    likes: 3,
  },
];

export const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (postId: number) => {
    setBlogPosts((posts) =>
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: likedPosts.has(postId) ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleAddComment = (postId: number) => {
    setBlogPosts((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, comments: post.comments + 1 } : post
      )
    );
  };

  const currentPost = selectedPost
    ? blogPosts.find((p) => p.id === selectedPost.id) || selectedPost
    : null;

  return (
    <section id="blog" className="py-20 bg-background">
      {/* Header */}
      <div className="bg-primary py-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground text-center">
          Nuestro blog
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedPost(post)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                {/* Top Info */}
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-semibold text-sm">
                    Neoka B.G
                  </span>
                  <span className="text-white/80 text-xs">
                    {post.date} · {post.readTime}
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                      className={`flex items-center gap-1 ml-auto transition-colors ${
                        likedPosts.has(post.id) ? "text-red-400" : "text-white/80 hover:text-red-400"
                      }`}
                    >
                      <span>{post.likes}</span>
                      <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ver más button */}
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

      {/* Blog Post Modal */}
      {currentPost && (
        <BlogPostModal
          post={currentPost}
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          onLike={() => handleLike(currentPost.id)}
          onAddComment={() => handleAddComment(currentPost.id)}
          isLiked={likedPosts.has(currentPost.id)}
        />
      )}
    </section>
  );
};
