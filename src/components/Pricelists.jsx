import pl from '../assets/pricelist.json'
import Pricelist from './Pricelist'
import { Link } from 'react-router-dom'

export default function Pricelists() {
  return (
    <>
    <div className='grid md:grid-cols-2 max-w-4xl p-5 gap-x-2 gap-y-8 grow mx-auto'>
      {pl.DSLR.map((kamera, index) => {
        return (
          <Pricelist data={kamera} key={index} index={index} />
        )
      })}
      <Pricelist data={pl.mirrorless[0]} key={'a6000'} />
    </div>
    <div className='flex flex-wrap items-center p-5 text-center text-slate-50 font-semibold max-w-4xl mx-auto'>
        <Link to='/ketentuan-sewa' className='border p-5 max-w-[384px] w-full mx-auto my-2 rounded-md bg-pink-400 '>Prosedur Sewa</Link>
        <Link to='/tips-memilih-kamera' className='border p-5 max-w-[384px] w-full mx-auto my-2 rounded-md bg-cyan-400'>Tips Memilih Kamera</Link>
    </div>
      </>
  )
}