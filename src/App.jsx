import { gridImages } from "./assets/imgs/imgs.js";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(Flip, CustomEase);

export default function App() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".overlay-span", {
      delay: 0.5,
      yPercent: 130,
      stagger: 0.3,
      ease: "power1.inOut",
      autoAlpha: 0,
    })
      .from(".overlay-img", {
        duration: 1,
        scale: 1.3,
        autoAlpha: 0,
        ease: "power3.out",
      })
      .from(".logo-top", {
        yPercent: -150,
        ease: "power1.out",
      })
      .from(
        ".logo-bottom",
        {
          yPercent: 150,
          ease: "power1.out",
          stagger: 0.1,
        },
        "<"
      )
      .to(
        ".overlay-span",
        {
          y: "-100%",
          autoAlpha: 0,
          stagger: 0.3,
          ease: "power1.inOut",
        },
        "-=.8"
      )
      .to(".logo-top", {
        y: "608%",
      })
      .to(
        ".letra-1",
        {
          x: -337,
          color: "#1e1e1e",
        },
        "<"
      )
      .to(
        ".letra-2",
        {
          x: 337,
          color: "#1e1e1e",
        },
        "<"
      );
  });

  return (
    <>
      <main className="h-screen flex justify-center items-center px-7 bg-[#fefff8]">
        <div className="size-full flex flex-col relative">
          {/* CONTAINER HEADER + GRID */}
          <div className="flex flex-col gap-9">
            {/* HEADER */}
            <header className="flex justify-between p-4 font-NeueMontreal-Bold">
              <div>MENU</div>
              <div>WHITE</div>
            </header>

            {/* GRID IMAGES CARDS */}
            <div className="grid grid-cols-12 gap-x-7 gap-y-14">
              <div className="grid-wraper col-[2/2]">
                <div className="grid-card" id="card1">
                  <img src={gridImages.Img1} alt="Img-1" />
                </div>
              </div>

              <div className="grid-wraper col-[4/4]">
                <div className="grid-card">
                  <img src={gridImages.Img2} alt="Img-2" />
                </div>
              </div>

              <div className="grid-wraper col-[9/9]">
                <div className="grid-card">
                  <img src={gridImages.Img3} alt="Img-3" />
                </div>
              </div>

              <div className="grid-wraper col-[3/3] row-[2/2]">
                <div className="grid-card">
                  <img src={gridImages.Img4} alt="Img-4" />
                </div>
              </div>

              <div className="grid-wraper col-[6/6] row-[2/2]">
                <div className="grid-card">
                  <img src={gridImages.Img5} alt="Img-5" />
                </div>
              </div>

              <div className="grid-wraper col-[8/8] row-[2/2]">
                <div className="grid-card">
                  <img src={gridImages.Img6} alt="Img-6" />
                </div>
              </div>

              <div className="grid-wraper col-[11/11] row-[2/2]">
                <div className="grid-card">
                  <img src={gridImages.Img7} alt="Img-7" />
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER TITLES */}
          <div className="max-h-full h-full flex w-full text-[#1e1e1e]">
            <span className="padre flex self-end-safe text-span font-FKScreamer">
              JECY
            </span>

            <div className="flex flex-col py-6 w-full h-full items-center justify-end gap-21 text-center">
              <span className="font-NeueMontreal-Bold text-[28.5px] leading-[100%]">
                ©JAMAREA <br />
                AGENZIA DI COMUNICAZIONE <br />
                BRANDING <br />E DIGITAL MARKETING
              </span>

              <div className="font-NeueMontreal-Bold text-xs">
                <span>LET'S JAM</span>
              </div>
            </div>

            <span className="padre2 flex self-end-safe text-span font-FKScreamer">
              NSIDE
            </span>
          </div>
        </div>
      </main>

      <div className="ovarlay flex flex-col fixed inset-0 justify-center items-center bg-transparent">
          <div className="relative z-1 flex gap-5 font-NeueMontreal-Bold text-white">
            <span className="overlay-span">LET'S JAM TOGETHER</span>
            <span className="overlay-span">RIGHT NOW</span>
            <span className="overlay-span">OH YEA</span>
          </div>

          <div className="container-image absolute size-full">
            <img
              className="overlay-img"
              src={gridImages.Img1}
              alt="img-overlay"
            />
          </div>

          <span className="logo-top absolute z-50 text-red-600 font-NeueMontreal-Bold text-[28.5px] leading-[100%] top-7 text-center">
            ©JAMAREA <br />
            AGENZIA DI COMUNICAZIONE <br />
            BRANDING <br />E DIGITAL MARKETING
          </span>

          <div className="absolute flex text-white bottom-0 gap-10">
            <span className="letra-1 flex self-end-safe text-span font-FKScreamer">
              JECY
            </span>
            <span className="letra-2 flex self-end-safe text-span font-FKScreamer">
              NSIDE
            </span>
          </div>
      </div>
    </>
  );
}
