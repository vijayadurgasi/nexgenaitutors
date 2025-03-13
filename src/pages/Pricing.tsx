
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Pricing Hero */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Choose the plan that works for you. All plans include access to our AI tutoring platform.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Basic"
                price="$29"
                period="monthly"
                description="Perfect for individual students"
                features={[
                  "Access to all basic subjects",
                  "5 AI tutoring sessions per week",
                  "Progress tracking",
                  "Basic assessments",
                  "Email support"
                ]}
                buttonText="Get Started"
                popular={false}
              />
              <PricingCard
                title="Premium"
                price="$79"
                period="monthly"
                description="Ideal for dedicated students"
                features={[
                  "Access to all subjects",
                  "Unlimited AI tutoring sessions",
                  "Advanced progress analytics",
                  "Personalized study plans",
                  "Human tutor support (2 hrs/month)",
                  "Priority email & chat support"
                ]}
                buttonText="Get Started"
                popular={true}
              />
              <PricingCard
                title="Family"
                price="$119"
                period="monthly"
                description="Great for families with multiple students"
                features={[
                  "Everything in Premium for 3 users",
                  "Shared family dashboard",
                  "Parent progress reports",
                  "Human tutor support (5 hrs/month)",
                  "24/7 priority support",
                  "Family learning goals"
                ]}
                buttonText="Get Started"
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Find answers to common questions about our plans and services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <FaqItem 
                question="Can I switch plans later?"
                answer="Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle."
              />
              <FaqItem 
                question="Is there a free trial available?"
                answer="Yes, we offer a 7-day free trial on all plans so you can experience the platform before committing."
              />
              <FaqItem 
                question="How does AI tutoring work?"
                answer="Our AI tutors analyze your learning style, strengths, and weaknesses to provide personalized instruction and practice. They adapt in real-time to your progress and needs."
              />
              <FaqItem 
                question="Can I cancel my subscription anytime?"
                answer="Yes, you can cancel your subscription at any time through your account settings. You'll continue to have access until the end of your current billing period."
              />
              <FaqItem 
                question="Are there discounts for educators or schools?"
                answer="Yes, we offer special pricing for schools, districts, and educational institutions. Please contact our sales team for more information."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already improving their grades with NextGen AI Tutors.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}) => {
  return (
    <Card className={`flex flex-col h-full transition-all duration-300 ${
      popular ? "border-purple-500 shadow-lg scale-105 relative" : ""
    }`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${
            popular 
              ? "bg-purple-600 hover:bg-purple-700" 
              : "bg-gray-900 hover:bg-gray-800"
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-600 dark:text-gray-400">{answer}</p>
    </div>
  );
};

export default Pricing;
