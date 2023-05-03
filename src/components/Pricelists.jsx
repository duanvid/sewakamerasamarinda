import pl from '../assets/pricelist.json'
import Pricelist from './Pricelist'

export default function Pricelists() {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-5 gap-2 gap-y-3 h-full grow mb-[64px]'>
    {pl.DSLR.map((kamera, index) => {
      return (
        <Pricelist data={kamera} key={index} />
      )
    })}
    </div>
  )
}