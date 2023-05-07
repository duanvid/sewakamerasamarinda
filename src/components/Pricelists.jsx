import pl from '../assets/pricelist.json'
import Pricelist from './Pricelist'
import { Link } from 'react-router-dom'

export default function Pricelists() {
  return (
    <>
    <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-5 gap-2 gap-y-3 grow'>
      {pl.DSLR.map((kamera, index) => {
        return (
          <Pricelist data={kamera} key={index} index={index} />
        )
      })}
      <Pricelist data={pl.mirrorless[0]} key={'a6000'} />
    </div>
    <div className='flex flex-wrap items-center p-5 text-center text-slate-50 font-semibold'>
        <Link to='/ketentuan-sewa' className='border p-5 max-w-[384px] w-full mx-auto my-2 rounded-md bg-pink-400 lg:max-w-[768px]'>Prosedur Sewa</Link>
        <Link to='/tips-memilih-kamera' className='border p-5 max-w-[384px] w-full mx-auto my-2 rounded-md bg-cyan-400 lg:max-w-[768px]'>Tips Memilih Kamera</Link>
    </div>
      </>
  )
}