import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { ActionButton } from "@/components/site/kit";
import type { Comment } from "@/types/blog";

/**
 * Comment UI only. There is no backend yet, so nothing is stored permanently —
 * submitted comments live in local state for this visit and the notice below
 * makes that explicit. Phase 2 swaps `comments` / `onSubmit` for Cloud data.
 */
export function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2 || body.trim().length < 4) {
      setError("Please add your name and a comment before posting.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setComments((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        postSlug,
        name: name.trim(),
        body: body.trim(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setName("");
    setEmail("");
    setBody("");
  }

  const field =
    "w-full border-b border-border bg-transparent py-3 text-ink outline-none placeholder:text-muted-foreground focus-visible:border-primary";

  return (
    <section className="border-t border-border pt-14" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="heading-md flex items-center gap-3 text-ink">
        <MessageCircle className="size-5 text-clay" aria-hidden="true" />
        Comments ({comments.length})
      </h2>

      <p className="mt-3 text-sm text-muted-foreground">
        Comments are not stored yet — this discussion space is being prepared and anything you post
        here stays on your screen only.
      </p>

      {comments.length > 0 && (
        <ul className="mt-10 space-y-8">
          {comments.map((c) => (
            <li key={c.id} className="border-t border-border pt-6">
              <p className="text-sm font-semibold text-ink">{c.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:max-w-2xl" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="comment-name" className="label-eyebrow text-clay">
              Name
            </label>
            <input
              id="comment-name"
              className={field}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              required
            />
          </div>
          <div>
            <label htmlFor="comment-email" className="label-eyebrow text-clay">
              Email (optional)
            </label>
            <input
              id="comment-email"
              type="email"
              className={field}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={200}
            />
          </div>
        </div>
        <div>
          <label htmlFor="comment-body" className="label-eyebrow text-clay">
            Comment
          </label>
          <textarea
            id="comment-body"
            className={`${field} min-h-28 resize-y`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            maxLength={1000}
            required
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
        <div>
          <ActionButton type="submit" variant="outline">
            Post comment
          </ActionButton>
        </div>
      </form>
    </section>
  );
}
