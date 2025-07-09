import { gridImages } from "./assets/imgs/imgs.js";

export default function App() {
  return (
    <main className="h-full flex justify-center items-center px-7">
      <div className="size-full bg-amber-200">

        {/* HEADER */}
        <header className="flex justify-between p-4 font-NeueMontreal-Bold">
          <div>MENU</div>
          <div>WHITE</div>
        </header>

        {/* GRID IMAGES CARDS */}
        <div className="mt-9 grid grid-cols-12 gap-x-7 gap-y-14">
          <div className="grid-wraper col-[2/2] overflow-hidden">
            <div className="grid-card">
              <img src={gridImages.Img1} alt="Img-1" />
            </div>
          </div>

          <div className="grid-wraper col-[4/4] overflow-hidden">
            <div className="grid-card">
              <img src={gridImages.Img2} alt="Img-2" />
            </div>
          </div>

          <div className="grid-wraper col-[9/9] overflow-hidden">
            <div className="grid-card">
              <img src={gridImages.Img3} alt="Img-3" />
            </div>
          </div>

          <div className="grid-wraper col-[3/3] row-[2/2] overflow-hidden">
            <div className="grid-card">
              <img src={gridImages.Img4} alt="Img-4" />
            </div>
          </div>
          <div className="grid-wraper col-[6/6] row-[2/2] overflow-hidden">
            <div className="grid-card">
              <img src={gridImages.Img5} alt="Img-5" />
            </div>
          </div>
          <div className="grid-wraper col-[8/8] row-[2/2] overflow-hidden">
            <div className="grid-card">
              <img src={gridImages.Img6} alt="Img-6" />
            </div>
          </div>
          <div className="grid-wraper col-[11/11] row-[2/2] overflow-hidden">
            <div className="grid-card">
              <img src={gridImages.Img7} alt="Img-7" />
            </div>
          </div>
        </div>

        {/* FOOTER TITLES */}
        <div className="flex bg-amber-700">
           <span>JECY</span>
           <div>
              TITLES
           </div>
           <span>NSIDE</span>
        </div>
      </div>
    </main>
  );
}
