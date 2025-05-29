'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Personalized Learning With Expert Tutors
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-lg">
              One-on-one sessions with experienced teachers tailored to your learning style
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Book a Demo Today
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1610484826967-09c5720778c7"
                alt="Kid learning online"
                className="rounded-lg shadow-xl w-full object-cover h-[400px] border-4 border-white/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-navy-800 p-4 rounded-lg shadow-lg md:max-w-[200px]">
                <p className="font-bold text-lg">95%</p>
                <p className="text-sm">of students improved their grades within 3 months</p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1"
              alt="Student with VR headset"
              className="absolute -top-4 -left-4 w-36 h-36 rounded-full border-4 border-white/30 shadow-lg hidden md:block object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
