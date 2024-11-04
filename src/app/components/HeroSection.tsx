"use client";

import React from 'react';
import Link from 'next/link';
import { useScroll, useTransform } from 'framer-motion';
import { GoogleGeminiEffect } from '../components/ui/google-gemini-effect'; 

function HeroSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 1], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 1], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 1], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 1], [0, 1.2]);

  console.log("Scroll Y Progress:", scrollYProgress.get());

  return (
 
      <div className='p-4 relative z-10 w-full text-center '>
        <div
          className='h-[500vh] bg-black w-full   rounded-md relative pt-40'
          ref={ref}
        >
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />
        </div>
        
      </div>
    
  );
}

export default HeroSection;
