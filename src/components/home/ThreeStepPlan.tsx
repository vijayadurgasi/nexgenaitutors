'use client';

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, LineChart } from "lucide-react";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Choose Your Program",
    description: "Select a course or book a free assessment to find the perfect fit.",
    icon: <CheckCircle2 className="h-36 w-36 text-navy-900/70" />
  },
  {
    number: 2,
    title: "Learn with Experts & AI",
    description: "Enjoy 1-on-1 or small group classes, enhanced by AI for real-time personalisation.",
    icon: <Sparkles className="h-36 w-36 text-navy-900/70" />
  },
  {
    number: 3,
    title: "Track Progress & Succeed",
    description: "Receive weekly reports and insights, ensuring your child stays on the path to success.",
    icon: <LineChart className="h-36 w-36 text-navy-900/70" />
  }
];

const ThreeStepPlan = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6">
            Our Simple 3-Step Success Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We&apos;ve designed a straightforward journey to help your child excel
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-navy-500 to-navy-700"></div>

          {/* Steps */}
          <div className="relative z-10 lg:mx-16">
            {steps.map((step, index) => {
              const isOdd = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex items-center mb-16 last:mb-0 ${isOdd ? 'justify-start' : 'justify-end'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`w-full max-w-lg ${isOdd ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'}`}
                  >
                    <Card className={`relative overflow-visible shadow-lg border-t-1 border-navy-600 py-5 px-3`}>
                      {/* Circle with number */}
                      <div
                        className={`absolute -top-6 ${isOdd ? '-left-6' : '-right-6'} bg-gradient-to-r from-navy-600 to-navy-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg z-10`}
                      >
                        {step.number}
                      </div>

                      <div className={`absolute top-0 ${isOdd ? "right-0" : "left-0"} overflow-hidden h-full opacity-10 dark:opacity-50 z-0`}>
                        <div className={`transform -translate-y-1/4 ${isOdd ? "translate-x-1/4" : "-translate-x-1/4"}`}>
                          {step.icon}
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-center z-10">
                        <div className="mb-3">
                          <h3 className={`${isOdd ? "text-left" : "text-right"} text-lg font-bold`}>{step.title}</h3>
                        </div>
                        <p className={`${isOdd ? "text-left" : "text-right"} text-gray-600 text-sm dark:text-gray-400`}>{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Center dot on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-navy-600 border-4 border-white dark:border-gray-900 -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepPlan;