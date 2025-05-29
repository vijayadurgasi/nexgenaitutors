import React from 'react';
import { getSubjectBySlug } from '@/lib/subjects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import BookingForm from '@/components/BookingForm';

interface Params {
  params: Promise<{
    slugs: string;
  }>;
  searchParams: Record<string, string | string[]>;
}

export default async function SubjectPage({ params }: Params) {
  // Await the params since they're now promises in Next.js 15+
  const resolvedParams = await params;
  const slug = resolvedParams.slugs;
  
  const subjectData = getSubjectBySlug(slug);
  
  if (!subjectData) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 flex-shrink-0">
                <Image
                  width={600}
                  height={400} 
                  src={subjectData.image} 
                  alt={subjectData.title} 
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800">{subjectData.title}</h1>
                <p className="text-lg text-gray-600 mb-8">{subjectData.fullDescription}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg">
                      Book a Free Demo Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-navy-800">
                        Get a free demo session with NextGenAI Tutors
                      </DialogTitle>
                      <DialogDescription>
                        Fill out the form below to schedule your free demo session with one of our expert tutors.
                      </DialogDescription>
                    </DialogHeader>
                    <BookingForm subjectTitle={subjectData.title} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto py-16 px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjectData.learningPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-navy-700 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">How Our AI Tutoring Works</h2>
            <div className="bg-navy-50 p-8 rounded-xl">
              <ol className="space-y-6">
                {subjectData.tutorApproach.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">Ready to Start Learning?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of students who have improved their grades and confidence with NextGenAI Tutors.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg">
                  Book Your Free Demo Session
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-navy-800">
                    Get a free demo session with NextGenAI Tutors
                  </DialogTitle>
                  <DialogDescription>
                    Fill out the form below to schedule your free demo session with one of our expert tutors.
                  </DialogDescription>
                </DialogHeader>
                <BookingForm subjectTitle={subjectData.title} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
    </div>
  );
};