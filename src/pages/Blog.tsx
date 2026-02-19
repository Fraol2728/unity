import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { blogApi } from "@/lib/api";

const Blog = () => {
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ["published-blogs"],
    queryFn: blogApi.getPublishedBlogs,
  });

  const getExcerpt = (content?: string) => {
    if (!content) return "No preview available.";

    return `${content.replace(/<[^>]+>/g, "").slice(0, 120)}...`;
  };

  const getFormattedDate = (date?: string) => {
    if (!date) return "Date unavailable";

    const parsedDate = new Date(date);
    return Number.isNaN(parsedDate.getTime())
      ? "Date unavailable"
      : parsedDate.toLocaleDateString();
  };

  return (
    <Layout>
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Stories, Updates & Resources
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay connected with our community through inspiring stories, program updates,
              helpful resources, and event announcements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {isLoading && <p className="text-muted-foreground">Loading blogs...</p>}
          {error && <p className="text-destructive">Failed to load blogs. Please try again.</p>}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post._id || post.slug || `blog-${index}`}
                  className="group bg-card border border-border rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={post.coverImage || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {getExcerpt(post.content)}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {getFormattedDate(post.createdAt)}
                      </div>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:bg-transparent">
                      <Link to={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
