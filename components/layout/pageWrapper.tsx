'use client';

import { useState, useEffect } from "react";
import PathMorphing from "../creativeLoader";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
        <div className="flex h-screen w-full items-center justify-center">
        <PathMorphing />
      </div>
    );
  }

  return <>{children}</>;
}
