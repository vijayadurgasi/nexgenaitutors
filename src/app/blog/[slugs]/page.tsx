import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogContent } from "@/lib/blog-content";
import { Button } from "@/components/ui/button";

type BlogPost = {
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  content: string;
};

type BlogContent = {
  [key: string]: BlogPost;
};

const blogContentTyped = blogContent as BlogContent;

export async function generateStaticParams() {
  return Object.keys(blogContentTyped).map((slug) => ({
    slugs: slug,
  }));
}

interface Params {
  params: Promise<{
    slugs: string;
  }>;
  searchParams: Promise<Record<string, string | string[]>>;
}

export default async function BlogPostPage({ params }: Params) {
  // Await the params since they're now promises in Next.js 15+
  const resolvedParams = await params;
  const slug = resolvedParams.slugs as string;

  const post = blogContentTyped[slug];

  if (!post) {
    return notFound();
  }

  // Generate a longer content based on the content field
  const content = post.content.split("\n\n");

  // Get related posts (excluding current post)
  const relatedPosts = Object.values(blogContentTyped)
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === post.category || Math.random() > 0.5) // Same category or random
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero section */}
        <section className="relative h-[50vh] min-h-[400px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto">
              <span className="inline-block mb-4 px-4 py-1 bg-navy-600 text-white rounded-full text-sm">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
                {post.title}
              </h1>
              <p className="text-white/80">{post.date}</p>
            </div>
          </div>
        </section>

        {/* Content section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg dark:prose-invert">
                {content.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="mb-6 text-gray-700 dark:text-gray-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-12 mb-16 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-navy-800/30 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-navy-800/30 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  Education
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-navy-800/30 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                  Learning
                </span>
              </div>

              {/* Author section */}
              <div className="border-t border-b border-gray-200 dark:border-gray-800 py-8 my-8">
                <div className="flex items-center">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Author"
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Educational Consultant & Content Writer at NextGen AI
                      Tutors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts section */}
        <section className="bg-gray-50 dark:bg-navy-900/20 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  href={`/blog/${relatedPost.slug}`}
                  className="block group"
                >
                  <div className="bg-white dark:bg-navy-800/30 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-navy-600 dark:text-navy-400 font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-xl mt-2 mb-3 group-hover:text-navy-600 dark:group-hover:text-navy-400 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedPost.content.split("\n\n")[0]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
              >
                <Link href="/blog">Back to All Articles</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
