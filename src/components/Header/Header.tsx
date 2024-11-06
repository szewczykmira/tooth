import React from "react";

export const Header = () => {
  return (
    <header className="bg-amber-700">
      <nav
        className="mx-auto flex max-w-5xl p-6 lg:px-8 justify-items-center items-center"
        aria-label="Global"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-amber-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          />
        </svg>
        <span className="text-amber-100 text-2xl font-bold tracking-wide">
          Tooth
        </span>
      </nav>
    </header>
  );
};
