"use client";

import { useEffect, useState } from "react";
import { CosmicIcon } from "@/components/cosmic-icons";

const stats = [
  { label: "Free Calculators", endValue: 100, suffix: "+", icon: "numerology", delay: "animate-delay-100" },
  { label: "Guna Milan Points", endValue: 36, suffix: "", icon: "vedic", delay: "animate-delay-200" },
  { label: "Vedic Nakshatras", endValue: 27, suffix: "", icon: "zodiac", delay: "animate-delay-300" }
];

const easeOutQuad = (t: number) => t * (2 - t);

function Counter({ endValue, suffix }: { endValue: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [endValue]);

  // Format with commas if > 999
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return <span>{formattedCount}{suffix}</span>;
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container-main py-12">
      {stats.map((stat, index) => (
        <div key={index} className={`glass-card-hover p-8 text-center animate-slide-up ${stat.delay}`}>
          <div className="mb-4 flex justify-center"><CosmicIcon name={stat.icon} className="w-10 h-10" /></div>
          <h3 className="text-4xl md:text-5xl font-display font-bold gradient-text-gold mb-2">
            <Counter endValue={stat.endValue} suffix={stat.suffix} />
          </h3>
          <p className="text-cosmic-200 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
