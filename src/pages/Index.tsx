import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Next Generation AI Tutoring
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Personalized learning experiences powered by artificial intelligence
              </p>
              <Button size="lg" variant="secondary" className="text-lg">
                Start Learning Today
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Student learning online"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose NextGen AI Tutors?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-purple-600" />}
              title="AI-Powered Learning"
              description="Adaptive learning paths tailored to your unique needs"
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-purple-600" />}
              title="Expert Tutors"
              description="Access to qualified tutors with proven track records"
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-purple-600" />}
              title="24/7 Availability"
              description="Learn at your own pace, anytime, anywhere"
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            />
            <FeatureCard
              icon={<BookOpen className="w-10 h-10 text-purple-600" />}
              title="Comprehensive Subjects"
              description="Wide range of subjects and topics covered"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="High School Student"
              content="The AI tutoring has helped me improve my grades significantly. It's like having a personal tutor available whenever I need help."
            />
            <TestimonialCard
              name="Michael Chen"
              role="College Student"
              content="The adaptive learning system is incredible. It identifies my weak areas and helps me focus on what I need to improve most."
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Parent"
              content="As a parent, I'm impressed with how engaging the platform is. My children actually look forward to their tutoring sessions!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students already benefiting from AI-powered tutoring
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
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
    <Card className="text-center p-6 hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="pt-6">
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
        </div>
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const TestimonialCard = ({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) => {
  return (
    <Card className="p-6">
      <CardContent className="pt-6">
        <p className="text-gray-600 mb-4">"{content}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;