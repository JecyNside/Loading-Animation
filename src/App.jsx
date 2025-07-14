import { useGSAP } from "@gsap/react";
import { gridImages } from "./assets/imgs/imgs.js";
import { Flip } from "gsap/Flip";
import gsap from "gsap";

gsap.registerPlugin(Flip);

export default function App() {
  const tween = () => {
    const cardContainer = document.querySelector("#card7");
    const img = document.querySelector(".container-image");

    const state = Flip.getState(img);

    cardContainer.appendChild(img);
    /* img.classList.remove("fixed"); */

    Flip.from(state, {
      duration: 2.5,
      ease: "expo.inOut",
    });
  };

  /* useGSAP(() => {
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
      .to(".overlay-span", {
        y: "-100%",
        autoAlpha: 0,
        stagger: 0.3,
        ease: "power1.inOut",
      })
      .from(
        ".logo-top",
        {
          yPercent: -150,
          ease: "power1.out",
        },
        "-=.8"
      )
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
        ".logo-top",
        {
          y: "638%",
          color: "#1e1e1e",
          ease: "power2.inOut",
          duration: 1,
        },
        "+=.5"
      )
      .call(tween, [], "-=1.6")
      .to(".overlay-img", {
        opacity: 1,
        pointerEvents: "all"
      }, "+=.3")
      .to(
        "#letra-1",
        {
          x: -337,
          color: "#1e1e1e",
          ease: "power2.inOut",
          duration: 1,
        },
        "-=2"
      )
      .to(
        "#letra-2",
        {
          x: 337,
          color: "#1e1e1e",
          ease: "power2.inOut",
          duration: 1,
        },
        "<"
      )
      .to(
        ".overlay",
        {
          autoAlpha: 0,
          duration: 0,
        },
        "+=.7"
      )
      .to(".footer-titles", {
        color: "#1e1e1e",
        duration: 0,
      });
  }); */

  return (
    <div className="size-full lg:px-7 relative">
      <main className="size-full flex justify-center items-center bg-[#fefff8]">
        <div className="size-full flex flex-col relative">
          {/* CONTAINER HEADER + GRID */}
          <div className="flex-1 flex flex-col lg:gap-9">
            {/* HEADER */}
            <header className="flex justify-between p-4 font-NeueMontreal-Bold">
              <div>MENU</div>
              <div>WHITE</div>
            </header>

            {/* GRID IMAGES CARDS */}
            <div className="grid lg:grid-cols-12 lg:gap-x-7 lg:gap-y-14 grid-cols-1 grid-flow-col auto-cols-[300px]">
              <div className="grid-wraper lg:col-[2/2]">
                <div className="grid-card" id="card1">
                  <img src={gridImages.Img1} alt="Img-1" />
                </div>
              </div>

              <div className="grid-wraper lg:col-[4/4]">
                <div className="grid-card" id="card2">
                  <img src={gridImages.Img2} alt="Img-2" />
                </div>
              </div>

              <div className="grid-wraper lg:col-[9/9]">
                <div className="grid-card" id="card3">
                  <img src={gridImages.Img3} alt="Img-3" />
                </div>
              </div>

              <div className="grid-wraper lg:col-[3/3] lg:row-[2/2]">
                <div className="grid-card" id="card4">
                  <img src={gridImages.Img4} alt="Img-4" />
                </div>
              </div>

              <div className="grid-wraper lg:col-[6/6] lg:row-[2/2]">
                <div className="grid-card" id="card5">
                  <img src={gridImages.Img5} alt="Img-5" />
                </div>
              </div>

              <div className="grid-wraper lg:col-[8/8] lg:row-[2/2]">
                <div className="grid-card" id="card6">
                  <img src={gridImages.Img6} alt="Img-6" />
                </div>
              </div>

              <div className="grid-wraper lg:col-[11/11] lg:row-[2/2]">
                <div className="grid-card" id="card7">
                  {/* <img src={gridImages.Img7} alt="Img-7" /> */}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER TITLES */}
          <div className="footer-titles flex-1 size-full flex text-black px-2">
            <span className="flex self-end-safe text-span font-FKScreamer ">
              JECY
            </span>

            <div className="flex flex-col py-7 w-full h-full items-center justify-end gap-21 text-center">
              <span className="font-NeueMontreal-Bold lg:text-3xl text-xl leading-[100%]">
                ©JAMAREA <br />
                AGENZIA DI COMUNICAZIONE <br />
                BRANDING <br />E DIGITAL MARKETING
              </span>

              <div className="font-NeueMontreal-Bold text-xs text-[#1e1e1e] hidden lg:block">
                <span>LET'S JAM</span>
              </div>
            </div>

            <span className="flex self-end-safe text-span font-FKScreamer">
              NSIDE
            </span>
          </div>
        </div>
      </main>










      
    </div>
  );
}
