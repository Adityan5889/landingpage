import * as React from "react";
import StatsCard from "./StatsCard";

export default function Stats() {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/96614498978605f2cfac40864a3e5987226afc23585b351f181d46c8c9260be2?apiKey=ffcf100e628448b29698078fdfd61318&",
      title: "FranShares Waitlist counter",
      value: "41,974",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/9335b6ec67a66c6fcdd7499a6ccb9017314d181b86eb145b90667b04a335fcce?apiKey=ffcf100e628448b29698078fdfd61318&",
      title: "An investor from Connecticut\nintends to invest",
      value: "$2,000",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/146291c682168736d9d33708d65283728fcb5d004cd9d4f0070dc8ef5168ba85?apiKey=ffcf100e628448b29698078fdfd61318&",
      title: "An investor from Oregon\nintends to invest",
      value: "$20,000",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/e08e587ffaa9d23b2f9e7a0ccc4b191c511f40cb47419bfa1182c54792994d0a?apiKey=ffcf100e628448b29698078fdfd61318&",
      title: "An investor from New Jersey\nintends to invest",
      value: "$20,000",
    },
  ];

  return (
    <div className="px-8 py-5 mt-36 w-full rounded-3xl bg-neutral-100 max-w-[1240px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index === 0
                ? "w-[17%]"
                : index === 1 || index === 3
                ? "w-[29%]"
                : "w-3/12"
            } max-md:ml-0 max-md:w-full`}
          >
            <StatsCard {...stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
