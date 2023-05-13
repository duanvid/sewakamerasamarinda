import { Link } from "react-router-dom";
import RentalServices from "./RentalServices";

export default function Home() {
  return (
    <div className="">
      <section>
        <h1 className="lg:text-5xl text-3xl text-center p-5 m-2 rounded-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Preserve your memories with our cameras</h1>
        <div className="hero flex flex-col justify-center items-center">
          <div className="max-w-[768px] p-5 antialiased">
            <p className="text-center">Whether you're a seasoned photographer or just starting out, our rental service has the perfect camera and lens for you.
            Experience photography like never before!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="py-2 px-5 border rounded-lg bg-pink-400 text-white duration-500"><Link to={'/pricelist'}>Get Started</Link></button>
            <button className="py-2 px-5 border rounded-lg text-pink-400"><Link to={'/pricelist'}>Explore</Link></button>
          </div>
          <img src="assets/HeroImage.webp" alt="" className="w-full max-w-[768px] my-10 mx-auto max-h-[384px] object-cover" />
        </div>
      </section>
    </div>
  )
}