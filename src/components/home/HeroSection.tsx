
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                NextGenAI Tutors: Smarter Learning, Brighter Futures
              </h1>
              <p className="text-xl md:text-2xl text-navy-200 font-medium">
                Australia's Leading AI-Powered Online Tutoring Platform
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
              Imagine a learning journey where every lesson is tailored to your child's unique mind. At NextGenAI Tutors, we make that a reality. We've brought together Australia's finest educators with advanced AI technology to create a truly personalised and effective online learning experience for students of all ages.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed max-w-2xl">
              From mastering core subjects to acing competitive exams and building future-ready skills, we're here to guide your child to success — affordably and conveniently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact-us">
                <Button size="lg" variant="secondary" className="text-lg px-8 w-full sm:w-auto">
                  Book Your Free Assessment Today!
                </Button>
              </Link>
              <Link href="/packages">
                <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  View Our Programs
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <Image
                width={600}
                height={400}
                src="https://images.unsplash.com/photo-1610484826967-09c5720778c7"
                alt="Kid learning with AI technology"
                className="rounded-lg shadow-xl w-full object-cover h-[400px] border-4 border-white/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-navy-800 p-4 rounded-lg shadow-lg md:max-w-[200px]">
                <p className="font-bold text-lg">95%</p>
                <p className="text-sm">of students improved their grades within 3 months</p>
              </div>
            </div>
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1"
              alt="Student with AI learning tools"
              className="absolute -top-4 -left-4 w-36 h-36 rounded-full border-4 border-white/30 shadow-lg hidden md:block object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
