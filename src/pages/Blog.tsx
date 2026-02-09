import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Eye, MessageCircle, Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useAllBlogStats } from "@/hooks/useAllBlogStats";

const Blog = () => {
  const postSlugs = blogPosts.map(p => p.slug);
  const { allStats, likedPosts, toggleLike } = useAllBlogStats(postSlugs);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Blog de Psicología y Terapia de Pareja en Huelva | Neoka</title>
        <meta name="description" content="Artículos sobre psicología, terapia de pareja, bienestar emocional y salud integral escritos por profesionales del centro Neoka en Huelva." />
        <link rel="canonical" href="https://centroneoka.es/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog de Psicología y Terapia de Pareja en Huelva | Neoka" />
        <meta property="og:description" content="Artículos sobre psicología, terapia de pareja, bienestar emocional y salud integral escritos por profesionales en Huelva." />
        <meta property="og:url" content="https://centroneoka.es/blog" />
      </Helmet>
      <Header />
      
      <section className="py-20 bg-background">
        <div className="bg-primary py-6 mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground text-center">
            Blog de Psicología y Terapia de Pareja en Huelva
          </h1>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => {
              const stats = allStats[post.slug] || { views: 0, likes: 0, comments: 0 };
              const isLiked = likedPosts.has(post.slug);
              
              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                      <h2 className="text-white text-lg font-semibold mb-3 line-clamp-2">{post.title}</h2>
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
                            e.preventDefault();
                            toggleLike(post.slug);
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Blog;
