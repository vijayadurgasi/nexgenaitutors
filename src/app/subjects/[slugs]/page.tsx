import React from "react";
import { getSubjectBySlug, subjects } from "@/lib/subjects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";

export async function generateStaticParams() {
  return subjects.map((sub) => ({
    slugs: sub.slug,
  }));
}

interface Params {
  params: Promise<{
    slugs: string;
  }>;
  searchParams: Promise<Record<string, string | string[]>>;
}

export default async function SubjectPage({ params }: Params) {
  // Await the params since they're now promises in Next.js 15+
  const resolvedParams = await params;
  // Await searchParams even if not used in this component
  // await searchParams;
  const slug = resolvedParams.slugs;

  const subjectData = getSubjectBySlug(slug);

  if (!subjectData) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-navy-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 md:py-20">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-800 dark:text-gray-100">
                  {subjectData.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {subjectData.fullDescription}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 dark:from-navy-700 dark:to-navy-900 dark:hover:from-navy-800 dark:hover:to-navy-950 px-8 py-6 text-lg">
                      Book a Free Demo Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-800">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-navy-800 dark:text-gray-100">
                        Get a free demo session with NextGenAI Tutors
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 dark:text-gray-300">
                        Fill out the form below to schedule your free demo
                        session with one of our expert tutors.
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
            <h2 className="text-3xl font-bold text-navy-800 dark:text-gray-100 mb-6">
              What You&apos;ll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjectData.learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-navy-700 dark:text-gray-100 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-800 dark:text-gray-100 mb-6">
              How Our AI Tutoring Works
            </h2>
            <div className="bg-navy-50 dark:bg-gray-800 p-8 rounded-xl">
              <ol className="space-y-6">
                {subjectData.tutorApproach.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-600 dark:bg-navy-700 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-800 dark:text-gray-100 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-navy-800 dark:text-gray-100 mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of students who have improved their grades and
              confidence with NextGenAI Tutors.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 dark:from-navy-700 dark:to-navy-900 dark:hover:from-navy-800 dark:hover:to-navy-950 px-8 py-6 text-lg">
                  Book Your Free Demo Session
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-navy-800 dark:text-gray-100">
                    Get a free demo session with NextGenAI Tutors
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 dark:text-gray-300">
                    Fill out the form below to schedule your free demo session
                    with one of our expert tutors.
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
}
