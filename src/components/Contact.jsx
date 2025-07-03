import React from "react";

const Contact = () => (
  <section>
    <h2 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact</h2>
    <p className="text-[#1c140d] text-base font-normal leading-normal pb-3 pt-1 px-4">For inquiries and custom orders, please contact us at:</p>
    <div className="flex items-center gap-4 bg-[#fcfaf8] px-4 min-h-14">
      <div className="text-[#1c140d] flex items-center justify-center rounded-lg bg-[#f4ede7] shrink-0 size-10">
        {/* Phone SVG */}
      </div>
      <p className="text-[#1c140d] text-base font-normal leading-normal flex-1 truncate">0242707678</p>
    </div>
    {/* Add more contact info and form as needed */}
  </section>
);

export default Contact;
