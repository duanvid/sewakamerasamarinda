import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true );


export default function RentalServices() {
  return (
    <main className="">
      <div className="p-5">
        <h2 className="text-center text-3xl font-semibold">Our Services</h2>
      </div>
      <div className="grid p-5 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-items-center mx-auto max-w-4xl">
        <div className="m-auto">
          <img src="assets/HeroImage.webp" alt="" className="w-full max-w-[768px] max-h-[384px]"/>
        </div>
        <div className="">
          <p className="text-center">Enhance Your Photography Experience with Our Diverse Range of Services.
            From DSLR and mirrorless cameras, lenses, to drones, we are ready to meet all your photography needs
          </p>
        </div>
      </div>
    </main>
  )
}