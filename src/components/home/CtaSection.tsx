
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
          src="https://plus.unsplash.com/premium_photo-1664104459156-21e2a06e7173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover dark:brightness-[50%]"
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
          <Link href={"/contact-us"}>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Get Started Now
          </Button>
          </Link>
          <Link href="/about-us">
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
            Learn More
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
