"use client";

import React, { useState } from "react";
import { subjects } from "@/lib/subjects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SubjectsPage() {
  const [visibleSubjects, setVisibleSubjects] = useState(6);

  const loadMore = () => {
    setVisibleSubjects((prev) => prev + 3);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Our Subjects
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Explore our wide range of subjects taught by expert tutors using our
          advanced AI platform. Choose the subject you&apos;re interested in to
          learn more about our approach and offerings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.slice(0, visibleSubjects).map((subject) => (
          <div
            key={subject.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition transition-smooth duration-900 border-x-2 border-x-navy-800"
          >
            <div className="relative h-48">
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {subject.title}
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {subject.description}
              </p>
              <Link href={`/subjects/${subject.slug}`}>
                <Button className="w-full bg-navy-600 text-white hover:bg-navy-700 dark:bg-navy-700 dark:hover:bg-navy-800">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleSubjects < subjects.length && (
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white dark:border-navy-400 dark:text-navy-400 dark:hover:bg-navy-500 dark:hover:text-white"
            onClick={loadMore}
          >
            Load More Subjects
          </Button>
        </div>
      )}
    </div>
  );
}
