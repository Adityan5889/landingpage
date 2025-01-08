import * as React from "react";

export default function Header() {
  const navItems = [
    { label: "Investments", link: "#" },
    { label: "Owners/Brokers", link: "#" },
    { label: "Lorem Ipsum", link: "#" },
  ];

  return (
    <header className="flex flex-wrap gap-5 justify-between py-px w-full bg-white max-w-[1240px] max-md:max-w-full">
      <nav className="flex flex-wrap gap-10 self-start mt-1 text-lg leading-snug text-center text-black max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/ffcf100e628448b29698078fdfd61318/b075c7221b0016f91f2721a22ed2b24b4c374cf7761b3231ddff480b3156d8b5?apiKey=ffcf100e628448b29698078fdfd61318&"
          alt="Company Logo"
          className="object-contain shrink-0 my-auto max-w-full aspect-[7.87] w-[118px]"
        />
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="basis-auto hover:text-blue-600 transition-colors"
            tabIndex="0"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex gap-5 text-base font-medium leading-8">
        <button className="px-10 py-2 text-black whitespace-nowrap border border-solid border-zinc-700 rounded-[100px] max-md:px-5 hover:bg-gray-100 transition-colors">
          Login
        </button>
        <button className="px-8 py-2 text-white bg-black rounded-[100px] max-md:px-5 hover:bg-gray-800 transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}
