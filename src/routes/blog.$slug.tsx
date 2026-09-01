import { createFileRoute, notFound } from "@tanstack/react-router";
import { formatPostDate, getPost, getRelatedPosts } from "@/lib/blog";
import { ActionLink } from "@/components/site/kit";
import { PageTransition, ParallaxImage, Reveal } from "@/components/site/motion";
import { PostCard, PostMeta } from "@/components/blog/PostCards";
import { CommentSection } from "@/components/blog/CommentSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedPosts(post) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story not found — Unity Welcome" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Unity Welcome Settlement Agency` },
        { name: "description", content: post.excerpt.slice(0, 155) },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: { "@type": "Person", name: post.author.name },
            publisher: { "@type": "NGO", name: "Unity Welcome Settlement Agency" },
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  return (
    <div className="container-page py-44 text-center">
      <h1 className="display-lg text-ink">Story not found</h1>
      <p className="body-lead mt-6">This article is not available.</p>
      <div className="mt-10 flex justify-center">
        <ActionLink to="/blog">Back to all stories</ActionLink>
      </div>
    </div>
  );
}

function BlogPostPage() {
  const { post, related } = Route.useLoaderData();

  return (
    <PageTransition>
      <article>
        <header className="container-page pt-36 pb-12 md:pt-44 md:pb-16">
          <PostMeta post={post} />
          <h1 className="display-lg mt-6 max-w-4xl text-ink">{post.title}</h1>
          <p className="body-lead mt-7 max-w-2xl">{post.excerpt}</p>
          <p className="mt-8 text-sm text-muted-foreground">
            By {post.author.name}
            {post.author.role ? `, ${post.author.role}` : ""} · {formatPostDate(post.publishedAt)}
          </p>
        </header>

        {post.coverImage && (
          <div className="container-page">
            <ParallaxImage
              src={post.coverImage}
              alt=""
              className="aspect-[16/9] w-full rounded-sm"
              distance={30}
            />
          </div>
        )}

        <div className="container-page py-20 md:py-28">
          <div className="mx-auto max-w-2xl space-y-7 text-lg leading-relaxed text-muted-foreground">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-2xl">
            <CommentSection postSlug={post.slug} />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border py-20 md:py-28" aria-labelledby="related-stories">
          <div className="container-page">
            <h2 id="related-stories" className="label-eyebrow text-clay">
              Related stories
            </h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <li>
                    <PostCard post={p} />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection />
    </PageTransition>
  );
}
