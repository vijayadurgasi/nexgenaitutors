
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Learning Potential with AI Tutoring
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-lg">
              Personalized learning experiences powered by advanced artificial intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg">
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Student learning online"
              className="rounded-lg shadow-xl w-full object-cover h-[400px] border-4 border-white/30"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-4 rounded-lg shadow-lg md:max-w-[200px]">
              <p className="font-bold text-lg">95%</p>
              <p className="text-sm">of students improved their grades within 3 months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
