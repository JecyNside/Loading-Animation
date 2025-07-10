import { gridImages } from "./assets/imgs/imgs.js";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(Flip, CustomEase);

export default function App() {
  /*  useGSAP(() => {
    const tl = gsap.timeline();

    const cardContainer = document.querySelector("#card1");
    const background = document.querySelector(".background");

    const state = Flip.getState(background);

    cardContainer.appendChild(background);

    const flipAnimation = Flip.from(state, {
      duration: 2,
      ease: "expo.inOut",
      scale: true,
    });
  }); */

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(".overlay-span", {
      yPercent: 130,
      stagger: .3,
      ease: "power1.inOut",
    })
    .from(".overlay-img", {
      scale: 1.2,
      autoAlpha: 0,
      ease: "power1.inOut"
    })
  })

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
            <span className="flex self-end-safe text-span font-FKScreamer">
              JECY
            </span>
            <div className="flex flex-col py-6 w-full h-full items-center justify-end gap-21 text-center">
              <div className="font-NeueMontreal-Bold text-[28.5px] leading-[100%]">
                ©JAMAREA <br />
                AGENZIA DI COMUNICAZIONE <br />
                BRANDING <br />E DIGITAL MARKETING
              </div>

              <div className="font-NeueMontreal-Bold text-xs">
                <span>LET'S JAM</span>
              </div>
            </div>
            <span className="flex self-end-safe text-span font-FKScreamer">
              NSIDE
            </span>
          </div>
        </div>
      </main>



      <div className="flex flex-col fixed inset-0 justify-center items-center bg-black">


        <div className="relative z-1 flex gap-5 font-NeueMontreal-Bold overflow-hidden text-white">
          <span className="relative overlay-span">LET'S JAM TOGETHER</span>
          <span className="relative overlay-span">RIGHT NOW</span>
          <span className="relative overlay-span">OH YEA</span>
        </div>


        <div className="absolute size-full">
            <img className="overlay-img" src={gridImages.Img4} alt="img-overlay" />
        </div>

      </div>










      {/* <img
        className="background absolute z-50 size-full top-0"
        src={gridImages.Img1}
        alt="Background"
      /> */}
    </>
  );
}
