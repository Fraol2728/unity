import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/site/kit";
import { PageTransition } from "@/components/site/motion";

/**
 * Placeholder route. The admin dashboard (auth, blog CRUD, comment moderation)
 * is built in Phase 2 once Lovable Cloud is connected.
 */
export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Unity Welcome Settlement Agency" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Internal administration area for Unity Welcome staff." },
    ],
  }),
  component: AdminPlaceholder,
});

function AdminPlaceholder() {
  return (
    <PageTransition>
      <div className="container-page flex min-h-[70vh] flex-col justify-center py-32">
        <p className="label-eyebrow text-clay">Internal</p>
        <h1 className="display-lg mt-6 max-w-2xl text-ink">Admin area coming soon</h1>
        <p className="body-lead mt-6 max-w-xl">
          Publishing tools, story management and comment moderation will live here once the
          backend is connected.
        </p>
        <div className="mt-10">
          <ActionLink to="/" variant="outline">
            Back to the website
          </ActionLink>
        </div>
      </div>
    </PageTransition>
  );
}
