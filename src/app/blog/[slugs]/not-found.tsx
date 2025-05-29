import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-navy-600 mb-6">
          Article Not Found
        </h1>
        <div className="w-24 h-1 bg-navy-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          We couldn't find the blog post you were looking for. The article may have been moved, renamed, or is no longer available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="default"
            className="bg-navy-600 hover:bg-navy-700"
            size="lg"
          >
            <Link href="/blog">
              Browse All Articles
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
            size="lg"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
