import { gridImages } from "./assets/imgs/imgs.js";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(Flip, CustomEase);

export default function App() {
  useGSAP(() => {

    const tl = gsap.timeline();

    const cardContainer = document.querySelector("#card1");
    const background = document.querySelector(".hijo");

    const state = Flip.getState(background);

    cardContainer.appendChild(background);

    const flipAnimation = Flip.from(state, {
      duration: 2,
      ease: "expo.inOut",
      scale: true,
    });

    /* tl.to(".overlay", {
      autoAlpha: 0,
      duration: 2,
      ease: "power2.inOut"
    })
    .add(flipAnimation, "<") */
  });

  return (
    <>
      <div className="padre relative size-full flex bg-amber-400 p-20">
        <div className="size-40 bg-green-400 flex justify-center items-center">
          <div className="grid-card size-full bg-blue-400" id="card1">
            {/* <img src={gridImages.Img1} alt="Img-1" /> */}
          </div>
        </div>
      </div>

      <div className="overlay  size-full bg-amber-950 top-0 left-0">
        <img className="hijo absolute top-0 left-0" src={gridImages.Img1} alt="Img-1" />
      </div>
    </>
  );
}
