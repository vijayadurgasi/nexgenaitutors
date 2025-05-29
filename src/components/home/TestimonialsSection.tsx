
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            See how our specialized tutoring has transformed learning experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Priya Sharma"
            relation="Parent of Arjun, 12"
            subject="Mathematics"
            content="The personalized approach to math has helped my son overcome his fear of numbers. The tutors are patient and make complex concepts easy to understand. Arjun's grades have improved significantly!"
            stars={5}
          />
          <TestimonialCard
            name="Raj Patel"
            relation="Parent of Meera, 9"
            subject="Thinking Skills"
            content="I've noticed remarkable improvements in my daughter's critical thinking abilities. The tutors focus not just on academic knowledge but on developing problem-solving skills. Meera now approaches challenges with confidence."
            stars={5}
          />
          <TestimonialCard
            name="Michelle Garcia"
            relation="Parent of James, 14"
            subject="English"
            content="The English tutoring program has transformed my son's writing and comprehension skills. The personalized feedback system helps him understand his strengths and weaknesses. His confidence in class discussions has soared!"
            stars={5}
          />
          <TestimonialCard
            name="Ananya Gupta"
            relation="Parent of Vikram, 10"
            subject="Coding"
            content="From knowing nothing about programming to building his own games in just months! The step-by-step approach made learning to code fun and engaging for my son. The tutors are knowledgeable and patient."
            stars={5}
          />
          <TestimonialCard
            name="Deepak Malhotra"
            relation="Parent of Riya, 8"
            subject="Science"
            content="The science tutoring has sparked a genuine curiosity in my daughter. The hands-on experiments and interactive sessions make learning enjoyable. Riya now looks forward to her science classes at school!"
            stars={5}
          />
          <TestimonialCard
            name="Michael Brown"
            relation="Parent of Olivia, 13"
            subject="Languages"
            content="My daughter has made incredible progress with her language skills. The conversational approach and cultural context provided have made learning both practical and enjoyable. Olivia now confidently speaks in class!"
            stars={5}
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  name,
  relation,
  subject,
  content,
  stars,
}: {
  name: string;
  relation: string;
  subject: string;
  content: string;
  stars: number;
}) => {
  return (
    <Card className="h-full p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <CardContent className="pt-6 h-full flex flex-col">
        <div className="flex flex-col mb-5">
          <div>
            <p className="font-bold text-navy-600 text-lg">{name}</p>
            <p className="text-sm text-gray-600">{relation}</p>
            <p className="text-sm font-semibold text-navy-400">{subject}</p>
            <div className="flex mt-1">
              {Array(stars).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 flex-grow italic">&quot;{content}&quot;</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
