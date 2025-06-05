"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function ThreeDCardDemo() {
  return (
    <section className="py-20 bg-accent/90 dark:bg-gradient-to-r dark:from-background dark:via-navy-950/50 dark:to-background ">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-6">
            Choose Your Learning Style
          </h2>
          {/* <p className="text-xl text-gray-600 dark:text-gray-400">
            
          </p> */}
        </div>
        <div className="flex flex-col md:flex-row gap-y-0 md:gap-6 justify-center items-center">

          <CardContainer className="inter-var">
            <CardBody className=" relative group/card bg-background border-primary/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-3xl font-extrabold"
              >
                1-on-1 Tutoring
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2"
              >
                For dedicated, individualised attention and flexible scheduling.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-gray-950 dark:text-white dark:border-white text-primary text-lg border border-primary"
                >
                  Book a Demo Class  →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="relative group/card bg-background border-primary/50 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-3xl font-extrabold"
              >
                Small Group Classes
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm max-w-sm mt-2 "
              >
                For collaborative learning, lively discussions, and peer interaction.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-white text-primary text-lg border border-primary dark:bg-gray-950 dark:text-white dark:border-white"
                >
                  Book a Demo Class  →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
