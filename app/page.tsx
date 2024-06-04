"use client";

import { Hammer } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UnderConstruction() {
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotated((prev) => !prev);
    }, 800); // 3000 milliseconds = 3 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <div className="h-screen">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <Hammer
          size={72}
          className={`transition-transform duration-1000 ${
            rotated
              ? "origin-bottom-left rotate-45"
              : "origin-bottom-left rotate-0"
          }`}
        />

        <h1 className="text-4xl font-bold leading-tight">
          Under Construction 🚧
        </h1>
        <p className="text-center text-muted-foreground">
          Our new page is currently being built. <br />
          Exciting updates are on the way for Adsbath!
        </p>
        <Link href="/adsbath" className="text-blue-500 hover:underline">
          Go back to Adsbath
        </Link>
      </div>
    </div>
  );
}
