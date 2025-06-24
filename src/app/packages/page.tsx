import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, CreditCard, Globe, GraduationCap, Gift, Calendar, Settings } from "lucide-react";
import Link from "next/link";
import CtaSection from "@/components/home/CtaSection";

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Packages Hero */}
        <section className="bg-gradient-to-r from-navy-600 to-navy-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible, Transparent Pricing for Every Learner
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              High-quality education that&apos;s accessible, flexible, and tailored to your child&apos;s needs
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose dark:prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                At NextGenAI Tutors, we believe high-quality education should be accessible, flexible, and tailored to your child&apos;s needs. Whether you&apos;re looking for one-on-one support, small group sessions, or exam-focused preparation, we offer a range of learning options to suit different learning styles and budgets.
              </p>
            </div>
          </div>
        </section>

        {/* Simple and Flexible Options */}
        <section className="py-16 bg-accent/50 dark:bg-accent/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy-800 dark:text-navy-300">
                  Simple and Flexible Options
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    We understand that every family has different goals and preferences. Some parents want personalised one-on-one guidance, while others prefer collaborative group sessions that build teamwork and confidence.
                  </p>
                  <p>
                    That&apos;s why we offer both formats, with pricing that reflects the level of attention and specialisation provided.
                  </p>
                  <p className="font-medium">
                    Group session fees vary from one-on-one tutoring fees. Please contact us directly for detailed pricing based on your child&apos;s grade level, learning goals, and preferred schedule.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-navy-200 hover:shadow-lg transition-all h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-navy-700 dark:text-navy-300">1-on-1 Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Personalized attention</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Custom pace learning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Flexible scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Targeted skill development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-navy-200 hover:shadow-lg transition-all h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-navy-700 dark:text-navy-300">Group Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Cost-effective learning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Collaborative environment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Peer learning benefits</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>Social skill development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Plans */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-6 text-navy-800 dark:text-navy-300 text-center">
              Tailored Plans for Every Learning Need
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-center">
              We don&apos;t believe in one-size-fits-all pricing. Every child learns differently, and their learning plan should reflect that.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-l-4 border-l-navy-500 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4 text-navy-600 dark:text-navy-400">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <CardTitle>Custom Learning Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our team works closely with parents to recommend a suitable structure, whether that&apos;s two group classes per week or an intensive exam prep course.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-navy-500 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4 text-navy-600 dark:text-navy-400">
                    <Settings className="h-10 w-10" />
                  </div>
                  <CardTitle>Outcome Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our tutors focus on delivering real learning outcomes, not just clocking hours, with curriculum alignment and continuous feedback.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-navy-500 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="mb-4 text-navy-600 dark:text-navy-400">
                    <Globe className="h-10 w-10" />
                  </div>
                  <CardTitle>Comprehensive Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    We cater to learners from Kindergarten to Grade 12 with a wide range of subjects and specialized programs.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">We cater to learners from Kindergarten to Grade 12, including support for:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-navy-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Core Subjects</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Math, English, Science, and Thinking Skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-navy-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Regional Languages</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hindi, Telugu, Tamil, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-navy-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Coding & Tech</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Scratch, Beginner Python, and Digital Skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-navy-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Exam Preparation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">NAPLAN, OC, and Selective School Exams</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-navy-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Enrichment Skills</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vedic Maths, Abacus, Chess</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-navy-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Wellness Sessions</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Yoga & Mindfulness for Kids</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* No Lock-In & Monthly Packages */}
        <section className="py-16 bg-accent/50 dark:bg-accent/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center mb-4 text-navy-600 dark:text-navy-400">
                  <Clock className="h-7 w-7 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-800 dark:text-navy-300">No Lock-In Contracts</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>We believe in earning your trust, not binding it. That&apos;s why we offer no lock-in contracts.</p>
                  <p>You&apos;re free to adjust your plan, pause, or switch subjects anytime with advance notice. This gives families complete control over their learning journey, without worrying about long-term commitments.</p>
                </div>
                
                <Card className="mt-6 bg-white dark:bg-gray-800 border-navy-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Gift className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      <p className="text-sm font-medium">For those new to NextGenAI Tutors, we also provide a free trial session, so your child can experience our teaching style before committing.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <div className="flex items-center mb-4 text-navy-600 dark:text-navy-400">
                  <CreditCard className="h-7 w-7 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-800 dark:text-navy-300">Monthly Packages</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>To make things easier, we offer monthly packages that include a set number of sessions at a discounted rate.</p>
                  <p>These are ideal for families who want consistent support throughout the term.</p>
                  <p>We&apos;re here to support you at every step from helping you choose the right plan to adjusting your schedule as your child grows.</p>
                </div>
                
                <Card className="mt-6 bg-white dark:bg-gray-800 border-navy-200">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      <p className="text-sm font-medium">Whether you&apos;re booking weekly tutoring or planning long-term academic support, we&apos;ll help you choose a plan that balances value, flexibility, and impact.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Get Started */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-navy-800 dark:text-navy-300">
              Let&apos;s Get Started
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mx-auto mb-10 max-w-3xl">
              Our pricing is personalised because your child&apos;s learning journey is unique. To find the right plan for your needs, speak with one of our academic advisors today. We&apos;ll walk you through the options, answer your questions, and help you get started with confidence.
            </p>
            
            <div className="bg-gradient-to-r from-navy-600/10 to-navy-800/10 dark:from-navy-600/20 dark:to-navy-800/20 rounded-xl p-8 mb-10">
              <h3 className="text-xl font-semibold mb-3">
                Ready to explore smarter learning with NextGenAI Tutors?
              </h3>
              <Link href="/contact-us">
                <Button size="lg" className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 px-8 py-6 text-lg">
                  Contact Us Now
                </Button>
              </Link>
              <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                Discuss your goals and receive a tailored quote
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection />
      </main>
    </div>
  );
};

export default Packages;