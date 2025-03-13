
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Don't just take our word for it - hear from some of our satisfied students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="High School Student"
            image="https://randomuser.me/api/portraits/women/44.jpg"
            stars={5}
            content="The AI tutoring has helped me improve my grades significantly. It's like having a personal tutor available whenever I need help. I've gone from a C to an A in math!"
          />
          <TestimonialCard
            name="Michael Chen"
            role="College Student"
            image="https://randomuser.me/api/portraits/men/32.jpg"
            stars={5}
            content="The adaptive learning system is incredible. It identifies my weak areas and helps me focus on what I need to improve most. Perfect for busy college students."
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Parent"
            image="https://randomuser.me/api/portraits/women/68.jpg"
            stars={4}
            content="As a parent, I'm impressed with how engaging the platform is. My children actually look forward to their tutoring sessions! Worth every penny for their education."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  name,
  role,
  image,
  content,
  stars,
}: {
  name: string;
  role: string;
  image: string;
  content: string;
  stars: number;
}) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <img 
              src={image} 
              alt={name} 
              className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-purple-600"
            />
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
          <div className="flex">
            {Array(stars).fill(0).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">"{content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
