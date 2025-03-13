
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Learning Experience?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students already benefiting from AI-powered tutoring.
          Start today and see the difference in your academic performance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
