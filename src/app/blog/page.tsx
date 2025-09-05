import { Suspense } from "react";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getSortedPostsData();
  return (
    <Suspense fallback={<div className="p-6">Loading blog…</div>}>
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="space-y-4">
          {posts.map(({ id, title, date, description }) => (
            <li key={id} className="border-b pb-3">
              <Link href={`/blog/${id}`} className="text-xl text-blue-600 hover:underline">
                {title}
              </Link>
              {date && <p className="text-sm text-gray-500">{date}</p>}
              {description && <p>{description}</p>}
            </li>
          ))}
        </ul>
      </main>
    </Suspense>
  );
}
