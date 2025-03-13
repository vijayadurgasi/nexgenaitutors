
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    title: "How AI is Transforming Personalized Learning",
    category: "Technology",
    date: "May 15, 2023",
    excerpt: "Discover how artificial intelligence is revolutionizing the way students learn and how personalized learning paths can improve educational outcomes.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "ai-transforming-learning"
  },
  {
    title: "5 Effective Study Techniques Based on Cognitive Science",
    category: "Learning Tips",
    date: "April 28, 2023",
    excerpt: "Learn evidence-based study methods that leverage how the brain works to help students retain information longer and understand concepts better.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "effective-study-techniques"
  },
  {
    title: "Building Critical Thinking Skills in Young Learners",
    category: "Skill Development",
    date: "April 10, 2023",
    excerpt: "Explore practical activities and approaches to foster critical thinking abilities in children from an early age.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "building-critical-thinking"
  },
  {
    title: "The Role of Parents in Supporting Online Learning",
    category: "Parenting",
    date: "March 22, 2023",
    excerpt: "Practical tips for parents to create an effective learning environment at home and support their children's educational journey.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "parents-supporting-online-learning"
  },
  {
    title: "Why Learning to Code is Essential in Today's Education",
    category: "Coding",
    date: "March 5, 2023",
    excerpt: "Understand the importance of introducing coding concepts early and how computational thinking benefits students across all subjects.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "importance-of-coding"
  },
  {
    title: "Addressing Math Anxiety: Strategies That Work",
    category: "Mathematics",
    date: "February 18, 2023",
    excerpt: "Explore effective approaches to help students overcome math anxiety and build confidence in their mathematical abilities.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "addressing-math-anxiety"
  }
];

export default Blog;
