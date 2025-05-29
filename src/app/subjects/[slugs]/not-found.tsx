import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-navy-800 mb-4">Subject Not Found</h1>
      <p className="text-lg mb-8">
        We couldn&apos;t find the subject you&apos;re looking for. It may have been moved or doesn&apos;t exist.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/subjects">
          <Button>Browse All Subjects</Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
