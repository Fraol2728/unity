import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatPostDate } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

export function PostMeta({ post, tone = "dark" }: { post: BlogPost; tone?: "dark" | "light" }) {
  return (
    <p
      className={`label-eyebrow flex flex-wrap items-center gap-3 ${
        tone === "dark" ? "text-clay" : "text-gold"
      }`}
    >
      <span>{post.category}</span>
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-50" />
      <span className="text-muted-foreground">{formatPostDate(post.publishedAt)}</span>
      <span className="text-muted-foreground">· {post.readTime} min read</span>
    </p>
  );
}

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group block lg:col-span-7"
        aria-label={post.title}
      >
        <div className="aspect-[16/10] overflow-hidden rounded-sm bg-cream-deep">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
      </Link>
      <div className="lg:col-span-5">
        <PostMeta post={post} />
        <h3 className="display-serif mt-5 text-ink">
          <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-clay">
            {post.title}
          </Link>
        </h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-primary hover:text-clay"
        >
          Read story
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block">
        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cream-deep">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
        <div className="mt-5">
          <PostMeta post={post} />
          <h3 className="mt-3 text-lg font-bold tracking-tight text-ink group-hover:text-clay">
            {post.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
