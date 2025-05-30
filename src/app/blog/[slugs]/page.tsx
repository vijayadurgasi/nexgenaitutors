import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slugs: post.slug,
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
  // Await searchParams even if not used in this component
  // await searchParams;
  const slug = resolvedParams.slugs as string;
  
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  // Generate a longer content based on the excerpt
  const content = generateExpandedContent(post.excerpt, post.title, post.category);

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
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
                {content.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
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
                      Educational Consultant & Content Writer at NextGen AI Tutors
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
                <Link key={index} href={`/blog/${relatedPost.slug}`} className="block group">
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
                        {relatedPost.excerpt}
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

function generateExpandedContent(excerpt: string, title: string, category: string): string[] {
  // Create an expanded article from the excerpt
  const introduction = `${excerpt} This article explores how parents and educators can work together to support children's development in this crucial area.`;
  
  const paragraphs = [
    introduction,
    `When it comes to ${title.toLowerCase()}, research has shown that early intervention and consistent support make a significant difference. Educational experts recommend starting with simple, age-appropriate activities that gradually increase in complexity as children develop their skills and confidence.`,
    `One of the key factors in ${category.toLowerCase()} education is creating an environment that encourages curiosity and exploration. Children naturally want to understand the world around them, and by providing them with the right tools and guidance, we can help them develop a lifelong love of learning.`,
    `At NextGen AI Tutors, we've observed that personalized learning approaches yield the best results. Every child has unique strengths, challenges, and learning preferences. By tailoring educational experiences to individual needs, we can help each student reach their full potential.`,
    `Communication between parents and educators is also essential. When adults in a child's life are aligned in their educational approach, it creates consistency that helps reinforce learning objectives. Regular check-ins and updates about progress can help ensure everyone is working toward the same goals.`,
    `Technology can be a powerful tool in modern education when used appropriately. Interactive applications, educational games, and AI-powered learning platforms can supplement traditional teaching methods and provide additional ways for children to engage with material.`,
    `Practice and repetition remain fundamental to mastering new skills, but they don't have to be boring. Finding creative ways to incorporate learning into everyday activities helps reinforce concepts while keeping children engaged and motivated.`,
    `Finally, celebrating progress, no matter how small, encourages children to persist through challenges. Acknowledging effort as well as achievement helps develop a growth mindset that will benefit them throughout their educational journey and beyond.`,
    `We hope this article has provided valuable insights into ${title.toLowerCase()}. For more personalized guidance, consider exploring the tutoring options available through NextGen AI Tutors, where we combine cutting-edge technology with proven educational methods to help every student succeed.`
  ];
  
  return paragraphs;
}