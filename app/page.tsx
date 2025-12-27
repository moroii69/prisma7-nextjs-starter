import { prisma } from "@/lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="min-h-screen bg-zinc-50 py-12">
      <section className="mx-auto max-w-3xl px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-zinc-900">Posts</h1>
        </header>

        {posts.length === 0 && <p className="text-sm text-zinc-500">No posts yet.</p>}

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="rounded-lg border border-zinc-200 bg-white px-6 py-5">
              <h2 className="text-lg font-medium text-zinc-900">{post.title}</h2>

              {post.content && (
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{post.content}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
