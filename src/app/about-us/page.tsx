import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-700 dark:text-navy-100">
                  About NextGenAI Tutors
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  NextGen AI Tutor is more than an edtech platform; we are
                  parents, educators, and technologists who believe every child
                  deserves quality education tailored to their learning needs.
                </p>
                <Link href="/contact-us">
                  <Button className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 text-lg rounded-md">
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/logo.png"
                  alt="Team working together"
                  className="rounded-xl shadow-lg w-full"
                  width={1000}
                  height={600}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full Content Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-700 mb-6 dark:text-navy-100">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              NextGenAI Tutor is more than an edtech platform, we are parents,
              educators, and technologists that believe that every child is
              entitled to quality education that is clear, patient, and tailored
              to their learning needs. Founded by Vijaya Durgasi who completed a
              B.Tech from Dadi Institute of Engineering and Technology and has
              developed knowledge and professional skills in DevOps, the genesis
              of our company originated from a very personal place.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              As a mother, Vijaya herself faced the challenges of finding
              effective and reputable online tutoring that also adhered to the
              expectations of providing children the clarity, patience, and step
              by step instruction that children need to learn successfully. As
              someone with a robust background in technology, along with an
              interest in education, she thought to better the landscape by
              connecting quality human teaching with smart, flexible AI
              software.
            </p>
            <p className="text-lg text-muted-foreground">
              We are essentially a community of individuals who understand the
              value of fostering children&apos;s curiosity and confidence. We are
              here to assist children not merely in achieving exams, but in
              actually grasping what they study, at their own speed. Our vision
              is to transform tutoring into something much more significant a
              customized mentorship experience driven by the future of learning.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-700 dark:text-navy-100 mb-6">
              Why We Started
            </h2>
            <p className="text-lg text-muted-foreground">
              Like many families, we turned to online tuitions hoping to provide
              our kids with academic support. But what we encountered fell short
              and rushed lessons, lack of engagement, and a one-size-fits-all
              approach. We quickly recognized a gap between what students need
              and what traditional online tutoring offers. That&apos;s when NextGen
              AI Tutor was born.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-100 mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground mb-4">
                Our mission is to bridge that gap by combining the best of human
                expertise and intelligent technology. With the help of
                AI-powered learning tools and a team of dedicated educators, we
                provide step-by-step, adaptive guidance tailored to each
                student’s pace. Whether a child needs more time on a concept or
                extra practice to build confidence, our platform adjusts without
                ever losing patience.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-100 mb-4">
                What We Stand For
              </h3>
              <p className="text-muted-foreground mb-4">
                We are committed to making quality education more accessible,
                engaging, and effective. At NextGen AI Tutor, learning isn’t
                rushed or robotic. It’s human-centered, thoughtfully guided, and
                supported by cutting-edge technology that understands your
                child’s unique learning journey.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-10 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-navy-700 dark:text-navy-100 mb-6">
              What We Want to Achieve
            </h2>

            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              At NextGen AI Tutor, our goal is to improve education with a
              responsible AI system that supports everyone involved — students,
              teachers, parents, and schools.
            </p>
            <ul className="text-lg text-muted-foreground text-left max-w-3xl mx-auto mb-8 list-disc list-inside">
              <li>
                Students should truly understand what they are learning, not
                just memorize it.
              </li>
              <li>
                Teachers should have powerful tools to support their teaching.
              </li>
              <li>
                Schools should maintain academic honesty and offer a clear,
                structured learning path.
              </li>
            </ul>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Our AI helps students build strong concepts and confidence in
              their studies. We provide AI-based support to help teachers create
              better lessons and give personal attention to each student. Our
              system helps ensure that learning remains fair, well-organized,
              and in line with school standards.
            </p>
            <Link href="/subjects">
              <Button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-6 text-lg">
                Explore Our Subjects
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
