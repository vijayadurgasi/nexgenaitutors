import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative h-[200vh]">
      {/* Background Image - Fixed within this component */}
      <div className="sticky top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=1920&q=80"
          alt="Learning background"
          fill
          priority
          className="object-cover brightness-[0.35]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-foreground/80 mix-blend-multiply"></div>
      </div>
      
      {/* First Screen - Hero Content */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Personalized Learning With Expert Tutors
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              One-on-one sessions with experienced teachers tailored to your learning style
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact-us">
                <Button size="lg" variant="secondary" className="text-lg font-medium px-8">
                  Book a Demo Today
                </Button>
              </Link>
              
              <Link href="/subjects">
                <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/10">
                  Explore Subjects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Screen - Stats Card */}
      <div className="absolute top-screen left-0 w-full h-screen flex items-center justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md text-white p-10 rounded-xl shadow-xl max-w-3xl mx-auto border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-secondary">98%</p>
                <p className="mt-2 text-white/80">Student Satisfaction</p>
              </div>
              
              <div className="text-center">
                <p className="text-5xl font-bold text-secondary">10,000+</p>
                <p className="mt-2 text-white/80">Tutoring Hours</p>
              </div>
              
              <div className="text-center">
                <p className="text-5xl font-bold text-secondary">85%</p>
                <p className="mt-2 text-white/80">Grade Improvement</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/about-us">
                <Button size="lg" variant="secondary" className="text-lg font-medium px-8">
                  Learn About Our Methods
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;