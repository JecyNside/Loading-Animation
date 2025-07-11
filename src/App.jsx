import { useGSAP } from "@gsap/react";
import { gridImages } from "./assets/imgs/imgs.js";
import { Flip } from "gsap/Flip";
import gsap from "gsap";

gsap.registerPlugin(Flip);

export default function App() {
  useGSAP(() => {
    const cardContainer = document.querySelector("#card5");
    const img = document.querySelector(".container-image");

    const state = Flip.getState(img);

    cardContainer.appendChild(img);
    img.classList.remove("fixed", "overflow-hidden", "flex");

    Flip.from(state, {
      duration: 2.5,
      ease: "expo.inOut",
      absolute: true,
    });
  });

  return (
    <div className="size-full px-7 relative">
      <main className="size-full flex justify-center items-center bg-[#fefff8]">
        <div className="size-full flex flex-col relative">
          {/* CONTAINER HEADER + GRID */}
          <div className="flex-1 flex flex-col gap-9">
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
                <div className="grid-card" id="card5">
                  {/* <img src={gridImages.Img1} alt="Img-1" /> */}
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
          <div className="flex-1 size-full flex text-[#1e1e1e]">
            <span className="w-full flex self-end-safe text-span font-FKScreamer ">
              JAM
            </span>

            <div className="flex flex-col py-7 w-full h-full items-center justify-end gap-21 text-center">
              <span className="font-NeueMontreal-Bold text-[28.5px] leading-[100%]">
                ©JAMAREA <br />
                AGENZIA DI COMUNICAZIONE <br />
                BRANDING <br />E DIGITAL MARKETING
              </span>

              <div className="font-NeueMontreal-Bold text-xs">
                <span>LET'S JAM</span>
              </div>
            </div>

            <span className="w-full flex self-end-safe text-span font-FKScreamer">
              AREA
            </span>
          </div>
        </div>
      </main>

      <div className="overlay w-dvw h-dvh flex fixed top-0 left-0 justify-center items-center overflow-hidden z-40">
        <div className="container-image overflow-hidden bg-black flex size-full fixed z-10">
          <img
            className="overlay-img"
            src={gridImages.Img5}
            alt="img-overlay"
          />
        </div>
      </div>
    </div>
  );
}
