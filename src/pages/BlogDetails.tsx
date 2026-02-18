import { Layout } from "@/components/layout/Layout";
import { blogApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Calendar, User } from "lucide-react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { slug = "" } = useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogApi.getBlogBySlug(slug),
    enabled: Boolean(slug),
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          {isLoading && <p className="text-muted-foreground">Loading blog...</p>}
          {error && <p className="text-destructive">Unable to find this blog post.</p>}

          {post && (
            <article>
              <img
                src={post.coverImage || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&h=500&fit=crop"}
                alt={post.title}
                className="w-full rounded-xl mb-8 object-cover max-h-[420px]"
              />
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetails;
