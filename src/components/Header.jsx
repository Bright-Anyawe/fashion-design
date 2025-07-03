import React from "react";

const Header = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4ede7] px-10 py-3">
    <div className="flex items-center gap-4 text-[#1c140d]">
      <div className="size-4">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
        </svg>
      </div>
      <h2 className="text-[#1c140d] text-lg font-bold leading-tight tracking-[-0.015em]">NANA ESY</h2>
    </div>
    <div className="flex flex-1 justify-end gap-8">
      <div className="flex items-center gap-9">
        <a className="text-[#1c140d] text-sm font-medium leading-normal" href="#">Home</a>
        <a className="text-[#1c140d] text-sm font-medium leading-normal" href="#">About</a>
        <a className="text-[#1c140d] text-sm font-medium leading-normal" href="#">Gallery</a>
        <a className="text-[#1c140d] text-sm font-medium leading-normal" href="#">Contact</a>
      </div>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f27f0c] text-[#1c140d] text-sm font-bold leading-normal tracking-[0.015em]">
        <span className="truncate">Book a Consultation</span>
      </button>
    </div>
  </header>
);

export default Header;
