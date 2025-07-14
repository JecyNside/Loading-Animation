import { useGSAP } from "@gsap/react";
import { gridImages } from "./assets/imgs/imgs.js";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

gsap.registerPlugin(Flip, Draggable);

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

  useGSAP(() => {
    let mm = gsap.matchMedia();
    const tl = gsap.timeline();

    /* mm.add("(max-width: 1023px)", () => {
      const width = 300 * 5.65;
      Draggable.create("#grid-container", {
        type: "x",
        inertia: true,
        bounds: {
          minX: 0,
          maxX: -width,
        },
      });

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
            y: "592.85%",
            color: "#1e1e1e",
            ease: "power2.inOut",
            duration: 1,
          },
          "+=.5"
        )
        .call(tween, [], "-=1.6")
        .to(
          ".overlay-img",
          {
            opacity: 1,
            pointerEvents: "all",
          },
          "+=.3"
        )
        .to(
          "#letra-1",
          {
            color: "#1e1e1e",
            ease: "power2.inOut",
            duration: 1,
          },
          "-=2"
        )
        .to(
          "#letra-2",
          {
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

    /* tl.from(".overlay-span", {
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
      .to(
        ".overlay-img",
        {
          opacity: 1,
          pointerEvents: "all",
        },
        "+=.3"
      )
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
      }); */
  });

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
            <div
              className="grid lg:grid-cols-12 lg:gap-x-7 lg:gap-y-14 grid-cols-1 grid-flow-col auto-cols-[300px]"
              id="grid-container"
            >
              <div className="grid-wraper col-[2/2] lg:col-[2/2]">
                <div
                  className="grid-card lg:hover:saturate-100 lg:hover:scale-125"
                  id="card1"
                >
                  <img src={gridImages.Img1} alt="Img-1" />
                </div>
              </div>

              <div className="grid-wraper col-[3/3] lg:col-[4/4]">
                <div
                  className="grid-card lg:hover:saturate-100 lg:hover:scale-125"
                  id="card2"
                >
                  <img src={gridImages.Img2} alt="Img-2" />
                </div>
              </div>

              <div className="grid-wraper col-[4/4] lg:col-[9/9]">
                <div
                  className="grid-card lg:hover:saturate-100 lg:hover:scale-125"
                  id="card3"
                >
                  <img src={gridImages.Img3} alt="Img-3" />
                </div>
              </div>

              <div className="grid-wraper col-[5/5] lg:col-[3/3] lg:row-[2/2]">
                <div
                  className="grid-card lg:hover:saturate-100 lg:hover:scale-125"
                  id="card4"
                >
                  <img src={gridImages.Img4} alt="Img-4" />
                </div>
              </div>

              <div className="grid-wraper col-[6/6] lg:col-[6/6] lg:row-[2/2]">
                <div
                  className="grid-card lg:hover:saturate-100 lg:hover:scale-125"
                  id="card5"
                >
                  <img src={gridImages.Img5} alt="Img-5" />
                </div>
              </div>

              <div className="grid-wraper col-[7/7] lg:col-[8/8] lg:row-[2/2]">
                <div
                  className="grid-card lg:hover:saturate-100 lg:hover:scale-125"
                  id="card6"
                >
                  <img src={gridImages.Img6} alt="Img-6" />
                </div>
              </div>

              <div className="grid-wraper col-[8/8] lg:col-[11/11] lg:row-[2/2]">
                <div
                  className="grid-card lg:hover:saturate-100 lg:hover:scale-125"
                  id="card7"
                >
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

      <div className="overlay size-full flex fixed inset-0 justify-center items-center z-50">
        {/* TOP-TEXTS */}
        <div className="relative z-10 flex gap-5 font-NeueMontreal-Bold text-white">
          <span className="overlay-span">LET'S JAM TOGETHER</span>
          <span className="overlay-span">RIGHT NOW</span>
          <span className="overlay-span">OH YEA</span>
        </div>

        {/* CONTAINER-IMAGE */}
        {/* <div className="container-image overflow-hidden bg-black flex size-full fixed">
          <img
            className="overlay-img"
            src={gridImages.Img7}
            alt="img-overlay"
          />
        </div> */}

        {/* AQUI ES */}
        <span className="logo-top absolute m-auto top-7 left-0 right-0 text-white font-NeueMontreal-Bold text-xl sm:text-2xl lg:text-3xl leading-[100%] text-center z-10 w-fit logo-alignment-fix">
          ©JAMAREA <br />
          AGENZIA DI COMUNICAZIONE <br />
          BRANDING <br />E DIGITAL MARKETING
        </span>

        {/* <div className="absolute flex text-white bottom-0 left-[2.45rem] lg:gap-9 gap-[3.22rem]">
          <span
            id="letra-1"
            className="text-span logo-bottom flex self-end-safe text-8xl font-FKScreamer z-10"
          >
            JECY
          </span>
          <span
            id="letra-2"
            className="text-span logo-bottom flex self-end-safe text-8xl font-FKScreamer z-10"
          >
            NSIDE
          </span>
        </div> */}

        {/* XDD */}
        <div className="absolute flex text-red-500 bottom-0 gap-10">
          <span
            id="letra-1"
            className="logo-bottom flex self-end-safe text-span font-FKScreamer z-10"
          >
            JECY
          </span>
          <span
            id="letra-2"
            className="logo-bottom flex self-end-safe text-span font-FKScreamer z-10"
          >
            NSIDE
          </span>
        </div>
      </div>
    </div>
  );
}
