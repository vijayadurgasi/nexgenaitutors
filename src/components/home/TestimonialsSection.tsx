
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
            name="Sarah Johnson"
            relation="Parent of Alex, 12"
            subject="Mathematics"
            content="The personalized approach to math has helped my son overcome his fear of numbers. The tutors are patient and make complex concepts easy to understand. Alex's grades have improved significantly!"
            stars={5}
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          />
          <TestimonialCard
            name="David Chen"
            relation="Parent of Emma, 9"
            subject="Thinking Skills"
            content="I've noticed remarkable improvements in my daughter's critical thinking abilities. The tutors focus not just on academic knowledge but on developing problem-solving skills. Emma now approaches challenges with confidence."
            stars={5}
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          />
          <TestimonialCard
            name="Michelle Garcia"
            relation="Parent of James, 14"
            subject="English"
            content="The English tutoring program has transformed my son's writing and comprehension skills. The personalized feedback system helps him understand his strengths and weaknesses. His confidence in class discussions has soared!"
            stars={5}
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          />
          <TestimonialCard
            name="Robert Taylor"
            relation="Parent of Sophia, 10"
            subject="Coding"
            content="From knowing nothing about programming to building her own games in just months! The step-by-step approach made learning to code fun and engaging for my daughter. The tutors are knowledgeable and patient."
            stars={5}
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          />
          <TestimonialCard
            name="Jennifer Wilson"
            relation="Parent of Ryan, 8"
            subject="Science"
            content="The science tutoring has sparked a genuine curiosity in my son. The hands-on experiments and interactive sessions make learning enjoyable. Ryan now looks forward to his science classes at school!"
            stars={5}
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          />
          <TestimonialCard
            name="Michael Brown"
            relation="Parent of Olivia, 13"
            subject="Languages"
            content="My daughter has made incredible progress with her language skills. The conversational approach and cultural context provided have made learning both practical and enjoyable. Olivia now confidently speaks in class!"
            stars={5}
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
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
  image,
}: {
  name: string;
  relation: string;
  subject: string;
  content: string;
  stars: number;
  image: string;
}) => {
  return (
    <Card className="h-full p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <CardContent className="pt-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-5">
          <div className="flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <div className="flex-grow">
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
        <p className="text-gray-600 dark:text-gray-400 flex-grow italic">"{content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
