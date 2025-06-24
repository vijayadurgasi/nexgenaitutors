
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SuccessPlanSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Program",
      description: "Select a course or book a free assessment to find the perfect fit."
    },
    {
      number: "2", 
      title: "Learn with Experts & AI",
      description: "Enjoy 1-on-1 or small group classes, enhanced by AI for real-time personalisation."
    },
    {
      number: "3",
      title: "Track Progress & Succeed",
      description: "Receive weekly reports and insights, ensuring your child stays on the path to success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-navy-50 to-navy-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-800">
            Our Simple 3-Step Success Plan
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-navy-200 hover:shadow-lg transition-all relative">
              <CardHeader className="text-center pb-4">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-navy-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <CardTitle className="text-xl text-navy-700 mt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessPlanSection;
