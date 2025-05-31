import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CountUp from '@/components/ui/count-up';

const HeroSection = () => {
  return (
    <div className="relative -mt-5 h-[200vh]">
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
          <div className="max-w-3xl xl:max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-navy-200 to-navy-300 bg-clip-text text-transparent">
              Smarter Learning Today. Brighter Futures Tomorrow.
            </h1>
            <h2 className="text-xl md:text-2xl xl:text-3xl mb-8 text-white/90">
              Australia&apos;s Leading AI-Powered Online Tutoring Platform.
            </h2>
            <div className='xl:max-w-3xl mx-auto'>
              <p className='text-sm md:text-base text-white/80 mb-10'>
                Welcome to NextGenAI Tutors, where expert teaching meets cutting-edge AI to create truly personalised learning experiences for students across Australia. We&apos;re transforming online education, helping your child excel in school subjects, competitive exams, and future-ready skills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/contact-us">
                <Button size={"lg"} className="text-lg bg-white text-navy-600 border border-white hover:bg-white/90 transition-transform hover:scale-105 duration-300">
                  Book a Demo Today
                </Button>
              </Link>

              <Link href="/subjects">
                <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white/30 hover:text-white transition-transform hover:scale-105 duration-300">
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
                <p className="text-5xl font-bold text-white/80">
                  <CountUp
                    from={0}
                    to={97}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span>%</span>
                </p>
                <p className="mt-2 text-white/80">Student Satisfaction</p>
              </div>

              <div className="text-center">
                <p className="text-5xl font-bold text-white/80">
                  <CountUp
                    from={0}
                    to={500}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span>+</span>
                </p>
                <p className="mt-2 text-white/80">Tutoring Hours</p>
              </div>

              <div className="text-center">
                <p className="text-5xl font-bold text-white/80">
                  <CountUp
                    from={0}
                    to={95}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span>%</span>
                </p>
                <p className="mt-2 text-white/80">Grade Improvement</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/about-us">
                <Button size="lg" className="text-lg bg-white text-navy-600 border border-white hover:bg-navy-50">
                  Learn More
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