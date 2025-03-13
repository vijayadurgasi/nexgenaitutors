
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories Across Subjects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            See how our specialized tutoring has transformed learning experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TestimonialCard
            subject="Mathematics"
            content="The personalized approach to math has helped my daughter overcome her fear of numbers. She's now top of her class in algebra!"
            stars={5}
          />
          <TestimonialCard
            subject="Thinking Skills"
            content="The critical thinking modules have dramatically improved my son's problem-solving abilities. He approaches challenges with confidence now."
            stars={5}
          />
          <TestimonialCard
            subject="English"
            content="My child's writing and comprehension skills have improved tremendously. The feedback system really helps them understand their strengths and weaknesses."
            stars={4}
          />
          <TestimonialCard
            subject="Coding"
            content="From knowing nothing about programming to building their own games in just months! The step-by-step approach made learning to code fun and engaging."
            stars={5}
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  subject,
  content,
  stars,
}: {
  subject: string;
  content: string;
  stars: number;
}) => {
  return (
    <Card className="h-full p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <CardContent className="pt-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-5">
          <div>
            <p className="font-bold text-navy-600 text-lg">{subject}</p>
          </div>
          <div className="flex">
            {Array(stars).fill(0).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 flex-grow">"{content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
