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
    excerpt:
      "Critical thinking is a vital skill for children to navigate the complexities of the modern world. This blog explores seven practical strategies to foster critical thinking, including encouraging curiosity, teaching problem-solving techniques, and promoting open-minded discussions. By implementing these methods, parents and educators can help children develop the ability to analyze, evaluate, and create solutions effectively.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "develop-critical-thinking-skills",
  },
  {
    title: "How Early Math Skills Impact Future Academic Success",
    category: "Mathematics",
    date: "May 28, 2023",
    excerpt:
      "Early math skills are a cornerstone of academic success. This blog delves into the importance of foundational math concepts, such as number sense and problem-solving, and their long-term impact on a child's educational journey. Learn actionable tips to nurture these skills at home and set your child on a path to excel in mathematics and beyond.",
    image:
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "early-math-skills-impact",
  },
  {
    title: "Why Learning to Code is Essential for Today's Children",
    category: "Coding",
    date: "May 10, 2023",
    excerpt:
      "In an increasingly digital world, coding has become a fundamental skill. This blog highlights the benefits of learning to code, including enhanced problem-solving abilities, creativity, and logical thinking. Discover how coding can empower children to innovate and succeed in various fields, from technology to the arts.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "learning-to-code-benefits",
  },
  {
    title: "The Power of Reading: How to Nurture a Lifelong Love of Books",
    category: "English",
    date: "April 22, 2023",
    excerpt:
      "Reading is a gateway to knowledge and imagination. This blog offers practical tips to cultivate a love for reading in children, such as creating a reading-friendly environment, exploring diverse genres, and setting an example as a reader. Learn how to make reading an enjoyable and enriching part of your child's life.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "nurture-love-of-reading",
  },
  {
    title: "Balancing Screen Time and Learning in the Digital Age",
    category: "Parenting",
    date: "April 5, 2023",
    excerpt:
      "In today's digital age, managing screen time is a challenge for many parents. This blog explores strategies to balance technology use with other activities, ensuring healthy development and effective learning. Discover tips to set boundaries, encourage offline activities, and make screen time more productive for your child.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "balancing-screen-time",
  },
  {
    title: "Supporting Your Child's Learning Journey at Home",
    category: "Education",
    date: "March 18, 2023",
    excerpt:
      "Parents play a crucial role in their child's education. This blog provides insights into creating a supportive learning environment at home, from setting up a dedicated study space to fostering a growth mindset. Learn how to complement formal education and inspire a lifelong love for learning in your child.",
    image:
      "https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "supporting-learning-at-home",
  },
  {
    title: "How AI is Transforming Education in Australia",
    category: "Education",
    date: "July 9, 2025",
    excerpt:
      "Artificial Intelligence (AI) is changing nearly every industry and education is no exception. In classrooms across Australia, AI is quietly transforming the way students learn, teachers teach, and parents track progress. With the rise of AI-powered education, tutoring and school support are becoming more personalised, data-driven, and effective than ever before.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "ai-transforming-education-australia",
  },
  {
    title: "Top 5 Reasons Parents Are Choosing Online Tutoring in Australia",
    category: "Education",
    date: "July 9, 2025",
    excerpt:
      "Discover why more families are turning to virtual tutoring platforms for better learning outcomes. Online tutoring offers accessibility, personalisation, and results, making it a top choice for Australian parents.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    slug: "top-5-reasons-parents-choosing-online-tutoring",
  },
];
