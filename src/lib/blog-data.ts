// Blog post data that can be imported by different components
export interface BlogPost {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
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
