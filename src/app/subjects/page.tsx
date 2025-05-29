import React from 'react';
import { subjects } from '@/lib/subjects';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SubjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Subjects</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Explore our wide range of subjects taught by expert tutors using our advanced AI platform.
          Choose the subject you're interested in to learn more about our approach and offerings.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{subject.title}</h2>
              <p className="mb-4">{subject.description}</p>
              <Link href={`/subjects/${subject.slug}`}>
                <Button className="w-full">Learn More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
