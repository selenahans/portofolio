// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import DataImage from "./data";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-3xl text-red-600 text-shadow-black">hao</h1> */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-amber-300 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero" className="w-10 rounded-md"/>
            <q>lorem ipsum im so happy to see you!</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, my name is Selena</h1>
          <p className="text-base/loose mb-6 opacity-50">
            lalalalla
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-amber-200 p-4 rounded-2xl hover:bg-amber-400">Download CV <i className="ri-download-line ri-lg "></i></a>
            <a href="#" className="bg-amber-200 p-4 rounded-2xl hover:bg-amber-400">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero" className="w-[500px] md:ml-auto" />
      </div>
      <div className="tentang mt-32 py-10">

      </div>
    </>
  )
}

export default App
