import React from "react";

const Hero = () => (
  <section className="px-40 flex flex-1 justify-center py-5">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuApUtQwBJSmqPmsk5ytvnIArZqEGXNHnk9-Ly2h79xnUchnz3EaO3g9KgPP1pwZMg2sw4CZDBt9QwlLmQdH_SY7vAjqrUMxlkggrg18HQrg8faHqOvuaxUDKBRdUspduRztyMbsBd3JowmLBgmDBusQ4g6ZqnZy8L9rXw-CZxsqGIcvoHsyZW6CLfJnU5lEHvLknYwYNhjyJFOPNgV1UUiuDBReiaKe4IUJUXwtYKat6FbBUJcBveUot7WfnIgKKtVCXCS5bAS2pOAm")' }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Wear Better, Look Better
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Experience the artistry of NANA ESY's designs, where tradition meets contemporary style.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f27f0c] text-[#1c140d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Explore Designs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
