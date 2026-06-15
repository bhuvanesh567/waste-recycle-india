"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  decimals = 0,
  prefix = "",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          delay={delay}
          decimals={decimals}
          prefix={prefix}
        />
      ) : (
        "0"
      )}
    </span>
  );
}
