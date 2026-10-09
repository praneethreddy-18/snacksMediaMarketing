import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export const CounterNumber: React.FC<CounterNumberProps> = ({
  target,
  suffix = '+',
  duration = 2
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-black text-blue-600">
      {count}
      {suffix}
    </span>
  );
};
