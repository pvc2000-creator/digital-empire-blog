import { Suspense } from "react";
import { getSortedPostsData } from "@/lib/posts";

export default function TestPage() {
  const posts = getSortedPostsData();

  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Test Blog List</h1>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </Suspense>
  );
}
