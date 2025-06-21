
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          width={1920}
          height={1080}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto">
          Ready to experience the NextGenAI difference?
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Join thousands of students already benefiting from AI-powered tutoring.
          Start today and see the difference in your child's academic performance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact-us">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-4 w-full sm:w-auto">
              Book Your Free Assessment Today!
            </Button>
          </Link>
          <Link href="/packages">
            <Button size="lg" variant="outline" className="text-lg px-10 py-4 bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
              View Our Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
