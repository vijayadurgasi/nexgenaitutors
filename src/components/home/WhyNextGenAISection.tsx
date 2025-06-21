
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Clock, Star, Book, Search } from "lucide-react";

const WhyNextGenAISection = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6 text-navy-600" />,
      title: "Personalised Learning Plans",
      description: "Tailored to your child's unique style and pace"
    },
    {
      icon: <Search className="h-6 w-6 text-navy-600" />,
      title: "Real-Time Progress Tracking",
      description: "See exactly how your child is performing and improving"
    },
    {
      icon: <Book className="h-6 w-6 text-navy-600" />,
      title: "Smart Practice & Adaptive Assessments",
      description: "Focused exercises that target specific learning gaps"
    },
    {
      icon: <Check className="h-6 w-6 text-navy-600" />,
      title: "Increased Engagement",
      description: "Interactive content keeps learning exciting"
    },
    {
      icon: <Clock className="h-6 w-6 text-navy-600" />,
      title: "Flexible & Convenient",
      description: "Quality education from the comfort of your home"
    },
    {
      icon: <Users className="h-6 w-6 text-navy-600" />,
      title: "Expert Tutors",
      description: "Highly qualified educators from Australia, India and around the world"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-800">
            Why NextGenAI? The Future of Learning is Here.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Traditional tutoring can&apos;t keep pace with every child&apos;s unique needs. That&apos;s why we combine the best of human expertise with advanced AI to deliver:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-navy-200 hover:shadow-lg transition-all hover:border-navy-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <CardTitle className="text-lg text-navy-700">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold text-navy-800 bg-navy-50 dark:bg-navy-900/20 p-6 rounded-lg inline-block">
            NextGenAI Tutors isn&apos;t just a service; it&apos;s a modern edge for your child&apos;s education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNextGenAISection;
