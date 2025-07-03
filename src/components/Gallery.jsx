import React from "react";

const Gallery = () => (
  <section>
    <h2 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Gallery</h2>
    <div className="pb-3">
      <div className="flex border-b border-[#e8dbce] px-4 gap-8">
        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#f27f0c] text-[#1c140d] pb-[13px] pt-4" href="#">
          <p className="text-[#1c140d] text-sm font-bold leading-normal tracking-[0.015em]">Party Wears</p>
        </a>
        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9c7349] pb-[13px] pt-4" href="#">
          <p className="text-[#9c7349] text-sm font-bold leading-normal tracking-[0.015em]">Wedding Wears</p>
        </a>
        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9c7349] pb-[13px] pt-4" href="#">
          <p className="text-[#9c7349] text-sm font-bold leading-normal tracking-[0.015em]">Ankara Wears</p>
        </a>
        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9c7349] pb-[13px] pt-4" href="#">
          <p className="text-[#9c7349] text-sm font-bold leading-normal tracking-[0.015em]">Traditional Wears</p>
        </a>
        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9c7349] pb-[13px] pt-4" href="#">
          <p className="text-[#9c7349] text-sm font-bold leading-normal tracking-[0.015em]">Office Wears</p>
        </a>
        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9c7349] pb-[13px] pt-4" href="#">
          <p className="text-[#9c7349] text-sm font-bold leading-normal tracking-[0.015em]">Custom Styles</p>
        </a>
      </div>
    </div>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {/* Add gallery images here as needed */}
    </div>
  </section>
);

export default Gallery;
