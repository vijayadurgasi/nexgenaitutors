
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users } from "lucide-react";

const LearningStyleSection = () => {
  const learningStyles = [
    {
      icon: <User className="h-12 w-12 text-navy-600" />,
      title: "1-on-1 Tutoring",
      description: "For dedicated, individualised attention and flexible scheduling."
    },
    {
      icon: <Users className="h-12 w-12 text-navy-600" />,
      title: "Small Group Classes", 
      description: "For collaborative learning, lively discussions, and peer interaction."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-800">
            Choose Your Learning Style
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {learningStyles.map((style, index) => (
            <Card key={index} className="border-navy-200 hover:shadow-lg transition-all hover:border-navy-300 text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-navy-50 rounded-full w-fit">
                  {style.icon}
                </div>
                <CardTitle className="text-2xl text-navy-700">{style.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{style.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningStyleSection;
