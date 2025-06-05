'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, ChartLine, Check, ClipboardCheck, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    title: "Proven AI Advantage",
    description: "Our AI enhances teaching, closing knowledge gaps and personalising the learning journey.",
    icon: <Bot className="h-36 w-36 text-navy-900/70" />
  },
  {
    title: "Safe & Intuitive Platform",
    description: "A secure, easy-to-use online environment designed for young learners.",
    icon: <ShieldCheck className="h-36 w-36 text-navy-900/70" />
  },
  {
    title: "Transparent Progress",
    description: "Regular updates and insights keep you fully informed of your child's development.",
    icon: <ChartLine className="h-36 w-36 text-navy-900/70" />
  },
  {
    title: "Real, Tangible Results",
    description: "We measure our success by your child's improved grades, confidence, and exam scores.",
    icon: <ClipboardCheck className="h-36 w-36 text-navy-900/70" />
  }
];

const WhyParentsTrustUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6">
            Why Parents Trust NextGenAI Tutors
          </h2>
          {/* <p className="text-xl text-gray-600 dark:text-gray-400">
            We&apos;ve earned the trust of thousands of families through our commitment to excellence
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pt-6"
            >
              {/* Green Checkmark - positioned outside the card */}
              <div className="absolute top-0 -left-4 z-10">
                <Check className="h-16 w-16 text-green-500" strokeWidth={3} />
              </div>

              <Card className="relative overflow-hidden hover:shadow-xl transition-all border border-primary/50 bg-background">
                <div className="absolute top-0 right-0 overflow-hidden h-full opacity-10 dark:opacity-50">
                  <div className="transform -translate-y-1/4 translate-x-1/4">
                    {point.icon}
                  </div>
                </div>
                <CardContent className="pt-8 px-6">
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParentsTrustUs;