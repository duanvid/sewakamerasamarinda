import { RiRoadMapLine, RiFileList3Line, RiWhatsappLine, RiFacebookBoxFill, RiInstagramLine, RiHomeSmileLine, RiBillLine, RiPagesLine, RiLightbulbFlashLine, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Nav({ isOpen, setIsOpen }) {
  const close = () => setIsOpen(false)

  return (
    <nav className={'flex flex-col border-b bg-slate-100 z-10 fixed h-screen w-72 lg:w-96 md:w-80 right-0 shadow-md transform ease-in-out' +
        (isOpen
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all opacity-0 duration-500 translate-x-full')}>
            <div className='p-5 border-b text-pink-400 font-semibold text-xl flex justify-between items-center'>
              Menu <button className='p-2 shadow-md border mr-5 rounded-md hover:rotate-90 hover:duration-500 duration-500' onClick={close}><RiCloseLine className='text-2xl'/></button>
            </div>
            <ul className='p-2 space-y-1 flex flex-col hover:text-slate-400 text-cyan-500'>
              <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`/`} className='flex flex-row items-center ' onClick={close}><RiHomeSmileLine className='mx-2 text-xl'/>Home</Link></li>
              <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`pricelist`} className='flex flex-row items-center' onClick={close}><RiBillLine className='mx-2 text-xl'/>Pricelist</Link></li>
              <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`blog`} className='flex flex-row items-center' onClick={close}><RiPagesLine className='mx-2 text-xl' />Blog</Link></li>
              <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`ketentuan-sewa`} className='flex flex-row items-center' onClick={close}><RiFileList3Line className='mx-2 text-xl'/>Ketentuan Sewa</Link></li>
              <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`tips-memilih-kamera`} className='flex flex-row items-center' onClick={close}><RiLightbulbFlashLine className='mx-2 text-xl'/>Tips Memilih Kamera</Link></li>
            </ul>
            <div className='space-x-2 text-5xl flex justify-center items-center mt-5 border-b mx-5 p-5 text-slate-600'>
              <a href='https://www.instagram.com/sewakamera_samarinda' target='_blank'><RiInstagramLine /></a>
              <RiFacebookBoxFill />
              <a href='https://wa.me/6281250115100?text=Halo%20Kak%20Saya%20mau%20booking%20kamera' target='_blank'><RiWhatsappLine /></a>
            </div>
            <div className='p-6 flex items-start text-cyan-600'>
              <div>
              <RiRoadMapLine className='text-2xl mr-2' /></div>
              <div className='text-sm w-full flex flex-col'>
                <p>Jalan Otto Iskandardinata Gg Steling</p>
                <p>(Gang sebelah Eramart Tenggiri, masuk gang, ada tikungan pertama, belok kanan. Rumah pertama sebelah kanan (warna ungu pagar hitam))</p>
                <button className='p-2 border m-5 bg-pink-400 text-slate-50'><a href="https://goo.gl/maps/qqi5EgCDJdPHxyyR7" target='_blank'>Buka Google Maps</a></button>
              </div>
            </div>
        </nav>
  )
}