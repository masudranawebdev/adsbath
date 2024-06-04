"use client";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Odometer from "react-odometerjs";

const OdometerText = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      value;
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <div>
      <Odometer
        className={cn("text-xl", className)}
        value={value}
        duration={255}
        format="(,ddd).dd"
        theme="minimal"
      />
    </div>
  );
};

export default OdometerText;
