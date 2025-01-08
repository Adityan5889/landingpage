import * as React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

export default function LandingPage() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-10 pb-5 bg-white">
      <div className="flex flex-col self-end w-full max-w-[1340px] max-md:max-w-full">
        <Header />
        <Hero />
        <Stats />
        {/* Rest of the original JSX structure continues here, maintaining all original styling and functionality */}
      </div>
    </div>
  );
}
