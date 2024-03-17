"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Lets",
    },
    {
      text: "Try",
    },
    {
      text: "It",
    },
    {
      text: "For",
    },
    {
      text: "Ourselfs",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 h-[4rem] pt-8  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
