
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Clock, BookOpen } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose NextGen AI Tutors?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Our cutting-edge platform combines advanced AI with expert human support to deliver the most effective learning experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Brain className="w-10 h-10 text-purple-600" />}
            title="AI-Powered Learning"
            description="Adaptive learning paths tailored to your unique needs and learning style"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-purple-600" />}
            title="Expert Human Tutors"
            description="Access to qualified tutors with proven track records when you need extra help"
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          />
          <FeatureCard
            icon={<Clock className="w-10 h-10 text-purple-600" />}
            title="24/7 Availability"
            description="Learn at your own pace, anytime, anywhere with instant feedback"
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          />
          <FeatureCard
            icon={<BookOpen className="w-10 h-10 text-purple-600" />}
            title="Comprehensive Curriculum"
            description="Wide range of subjects and topics covered with constantly updated content"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  image,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 border-t-purple-600">
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;
