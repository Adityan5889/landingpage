import * as React from "react";

export default function StatsCard({ icon, title, value }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-1.5 text-base leading-6 text-neutral-500">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-start w-5 aspect-square"
        />
        <div>{title}</div>
      </div>
      <div className="self-center mt-2.5 text-2xl font-semibold leading-snug text-blue-600">
        {value}
      </div>
    </div>
  );
}
