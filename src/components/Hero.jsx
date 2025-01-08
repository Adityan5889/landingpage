import * as React from "react";

export default function Hero() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/89c558d489f8257b99fc963d51589ed0bc3ebf0b8e2efb92b6fe7804c1fca131?apiKey=ffcf100e628448b29698078fdfd61318&",
      alt: "Business showcase 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/d9547d67b06dfdc8d02288ac3dafec7c2aa6d01ba0f3fe92f722217a8d17f1e6?apiKey=ffcf100e628448b29698078fdfd61318&",
      alt: "Business showcase 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/61b21019da4ea335250f23f7cf1b416737cc84a2e0726ca73689715d176b176d?apiKey=ffcf100e628448b29698078fdfd61318&",
      alt: "Business showcase 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/ad5859b37c03d2ff02d2b567e04343437a1f12abb7756088cf57153039c9dc48?apiKey=ffcf100e628448b29698078fdfd61318&",
      alt: "Business showcase 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/9da8d818d346724a7edae20f0982d65d549a94ee991b6684b1292c5bbd1ca355?apiKey=ffcf100e628448b29698078fdfd61318&",
      alt: "Business showcase 5",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-32 max-md:mt-10">
      <h1 className="text-6xl font-semibold text-center text-black w-[1067px] max-md:max-w-full max-md:text-4xl">
        Own a piece of Main Street: Join the SMB revolution!
      </h1>
      <p className="mt-8 text-xl leading-7 text-center text-neutral-500 w-[809px] max-md:max-w-full">
        Diversify your portfolio – unlock the attractive returns of Small -
        Medium Businesses without any of the operational burden.
      </p>
      <div className="flex flex-wrap gap-4 items-end mt-16 max-md:mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className={`object-contain shrink-0 max-w-full rounded-3xl ${
              index === 0 || index === 4
                ? "self-stretch aspect-[0.71] w-[260px]"
                : index === 1 || index === 3
                ? "mt-28 aspect-[0.88] w-[220px] max-md:mt-10"
                : "mt-52 aspect-[1.41] w-[220px] max-md:mt-10"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
