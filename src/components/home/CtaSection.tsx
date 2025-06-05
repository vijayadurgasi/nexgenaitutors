
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-navy-900 via-navy-900 to-navy-950 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          width={1920}
          height={1080}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-10 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to experience the NextGenAI difference?
        </h2>
        {/* <p className="text-xl mb-8 max-w-2xl mx-auto">
          Book your FREE assessment today!
        </p> */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="outline" className="bg-white border border-primary text-lg text-navy-500 font-bold px-8">
            BOOK YOUR FREE ASSESSMENT TODAY
          </Button>
          {/* <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
            Learn More
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
