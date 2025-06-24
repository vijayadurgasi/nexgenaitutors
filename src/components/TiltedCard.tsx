'use client'

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const TiltCard = ({
  icon,
  title,
  description,
  image,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}) => {
  const [rotations, setRotations] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setAnimating] = useState(false);
  const isAnimatingReference = useRef(isAnimating);
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 });

  interface Position {
    x: number;
    y: number;
  }

  const animate = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnimating(true);

    const rect = event.currentTarget.getBoundingClientRect();

    const absolute: Position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };

    const percent: Position = {
      x: round((100 / rect.width) * absolute.x),
      y: round((100 / rect.height) * absolute.y)
    };

    const center: Position = {
      x: percent.x - 50,
      y: percent.y - 50
    };

    setRotations({
      x: round(((center.x > 50 ? 1 : -1) * center.x) / 12),
      y: round(center.y / 16),
      z: round(distance(percent.x, percent.y, 50, 50) / 20)
    });

    setGlare({
      x: percent.x,
      y: percent.y,
      opacity: 0.25
    });
  };

  const stopAnimating = () => {
    setAnimating(false);

    setTimeout(() => {
      if (isAnimatingReference.current) return;

      setRotations({ x: 0, y: 0, z: 2 });
      setGlare({ x: 50, y: 50, opacity: 0 });
    }, 100);
  };

  return (
    <motion.div
      onMouseMove={animate}
      onMouseLeave={stopAnimating}
      animate={{
        rotateY: rotations.x,
        rotateX: rotations.y,
        transformPerspective: rotations.z * 100
      }}
      style={{
        width: '480px',  // Increased width for horizontal layout
        height: '200px', // Decreased height
        borderRadius: '0.5rem',
        boxShadow:
          '0 0 0 1px rgba(0, 0, 0, 0.105), 0 9px 20px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.106)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center',
        perspective: '320px'
      }}
      className="max-w-[350px] md:max-w-full"
      >
      <motion.div
        style={{
          zIndex: 2,
          mixBlendMode: 'overlay',
          position: 'absolute',
          transform: 'translateZ(1px)',
          width: '100%',
          height: '100%',
          borderRadius: '0.5rem',
          transformStyle: 'preserve-3d'
        }}
        animate={{
          background: `radial-gradient(
            farthest-corner circle at ${glare.x}% ${glare.y}%,
            rgba(255, 255, 255, 0.7) 10%,
            rgba(255, 255, 255, 0.5) 24%,
            rgba(0, 0, 0, 0.8) 82%
          )`,
          opacity: glare.opacity
        }}
      />
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-l-navy-600 w-full h-full flex flex-row relative">
        {/* Background Icon - Positioned in the corner */}
        <div className="absolute top-0 right-0 overflow-hidden h-full opacity-10 dark:opacity-50">
          <div className="transform -translate-y-1/4 translate-x-1/4">
            {icon}
          </div>
        </div>
        
        {/* Left side - Image (50% width) */}
        <div className="w-1/2 overflow-hidden">
          <Image
            width={400}
            height={400} 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Right side - Content (50% width) */}
        <CardContent className="w-1/2 p-6 flex flex-col justify-center z-10">
          <div className="mb-3">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <p className="text-gray-600 text-sm dark:text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function round(num: number, fix = 2) {
  return parseFloat(num.toFixed(fix));
}

function distance(x1:number, y1:number, x2:number, y2:number) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export default TiltCard;