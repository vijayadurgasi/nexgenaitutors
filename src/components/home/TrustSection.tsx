
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      title: "Proven AI Advantage",
      description: "Our AI enhances teaching, closing knowledge gaps and personalising the learning journey."
    },
    {
      title: "Safe & Intuitive Platform", 
      description: "A secure, easy-to-use online environment designed for young learners."
    },
    {
      title: "Transparent Progress",
      description: "Regular updates and insights keep you fully informed of your child's development."
    },
    {
      title: "Real, Tangible Results",
      description: "We measure our success by your child's improved grades, confidence, and exam scores."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-800">
            Why Parents Trust NextGenAI Tutors
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <Card key={index} className="border-navy-200 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-700 mb-2">{point.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
