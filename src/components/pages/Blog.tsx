
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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

            <div className="mt-16 text-center">
              <Button
                variant="outline"
                className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

interface BlogPost {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, category, date, excerpt, image, slug }: BlogPost) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative h-56">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
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
          to={`/blog/${slug}`}
          className="text-navy-600 font-semibold hover:text-navy-800"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
};

const blogPosts: BlogPost[] = [
  {
    title: "7 Ways to Develop Critical Thinking Skills in Children",
    category: "Thinking Skills",
    date: "June 15, 2023",
    excerpt: "Discover effective strategies to help your child develop essential critical thinking abilities that will benefit them throughout their academic journey and beyond.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "develop-critical-thinking-skills"
  },
  {
    title: "How Early Math Skills Impact Future Academic Success",
    category: "Mathematics",
    date: "May 28, 2023",
    excerpt: "Research shows that strong early mathematics skills are a powerful predictor of later academic achievement. Learn how to build a solid foundation for your child.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "early-math-skills-impact"
  },
  {
    title: "Why Learning to Code is Essential for Today's Children",
    category: "Coding",
    date: "May 10, 2023",
    excerpt: "Coding teaches more than just technical skills. Discover how programming helps children develop problem-solving abilities, creativity, and logical thinking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "learning-to-code-benefits"
  },
  {
    title: "The Power of Reading: How to Nurture a Lifelong Love of Books",
    category: "English",
    date: "April 22, 2023",
    excerpt: "Encouraging reading at an early age has profound effects on literacy, vocabulary, and academic performance. Learn practical tips to foster a love of reading in your child.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "nurture-love-of-reading"
  },
  {
    title: "Balancing Screen Time and Learning in the Digital Age",
    category: "Parenting",
    date: "April 5, 2023",
    excerpt: "Finding the right balance between technology use and other activities is crucial for healthy development. Explore practical strategies for managing screen time effectively.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "balancing-screen-time"
  },
  {
    title: "Supporting Your Child's Learning Journey at Home",
    category: "Education",
    date: "March 18, 2023",
    excerpt: "Parents are their children's first teachers. Learn how to create a supportive learning environment at home that complements formal education and nurtures curiosity.",
    image: "https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "supporting-learning-at-home"
  }
];

export default Blog;
