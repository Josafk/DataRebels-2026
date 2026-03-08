"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseValue(value: string): {
  prefix: string;
  num: number;
  suffix: string;
  format: (n: number) => string;
} {
  const match = value.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value, format: (n) => String(n) };

  const [, prefix = "", numStr = "0", suffix = ""] = match;
  const num = parseInt(numStr.replace(/,/g, ""), 10) || 0;

  const hasComma = numStr.includes(",");
  const decimals = numStr.split(".")[1]?.length ?? 0;

  const format = (n: number) => {
    const rounded = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
    return hasComma ? parseInt(rounded, 10).toLocaleString() : rounded;
  };

  return { prefix, num, suffix, format };
}

export function AnimatedCounter({
  value,
  duration = 1500,
  className = "",
}: AnimatedCounterProps) {
  const { prefix, num, suffix, format } = parseValue(value);
  const [displayValue, setDisplayValue] = useState(() =>
    num === 0 ? value : `${prefix}${format(0)}${suffix}`
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        setHasAnimated(true);

        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 2.5);
          const current = num * eased;
          setDisplayValue(`${prefix}${format(current)}${suffix}`);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, num, prefix, suffix, format, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
