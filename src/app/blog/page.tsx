import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/lib/blog-card-data";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-navy-600/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Latest Insights & Articles
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Discover expert tips, learning resources, and educational trends
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const BlogCard = ({
  title,
  category,
  date,
  excerpt,
  image,
  slug,
}: BlogPost) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
        <div className="absolute top-4 left-4 bg-navy-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-navy-600 font-semibold hover:text-navy-800"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
};

export default Blog;
