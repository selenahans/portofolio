// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import DataImage from "./data";
import { listTools } from "./data";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-3xl text-red-600 text-shadow-black">hao</h1> */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-amber-300 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-10 rounded-md"
            />
            <q>lorem ipsum im so happy to see you!</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, my name is Selena
          </h1>
          <p className="text-base/loose mb-6 opacity-50">lalalalla</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-amber-200 p-4 rounded-2xl hover:bg-amber-400"
            >
              Download CV <i className="ri-download-line ri-lg "></i>
            </a>
            <a
              href="#"
              className="bg-amber-200 p-4 rounded-2xl hover:bg-amber-400"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-[500px] md:ml-auto"
        />
      </div>
      <div className="tentang mt-32 py-10">
        <div className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">LALALLALALALA</p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45
                  <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  45
                  <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32 ">
          <h1 className="text-4xl/snug font-bold mb-4"> tools</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">tools yg aku pakai</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              listTools.map(tool => (
            <div className="flex items-center  gap-2 p-3 border border-zinc-800 rounded-md hover:bg-zinc-200 group " key={tool.id}>
              <img
                src={tool.gambar}
                alt="tools image"
                className="w-14 bg-zinc-800 p-1 group-hover: bg-zinc-900"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
