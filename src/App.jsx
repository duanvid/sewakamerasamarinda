import { Outlet, Link } from 'react-router-dom'
import './index.css'
import { RiFileList3Line, RiWhatsappLine, RiFacebookBoxFill, RiInstagramLine, RiHomeSmileLine, RiBillLine, RiPagesLine, RiLightbulbFlashLine, RiCloseLine, RiMenuFill } from 'react-icons/ri'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-screen flex flex-col'>
    <header className='p-5 border-b bg-white flex justify-between items-center'>
      <h1 className='lg:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 w-fit'>Sewa Kamera Samarinda</h1>
      <button className='p-2 border rounded-md text-2xl hover:bg-cyan-300 hover:duration-500 duration-500' onClick={() => setIsOpen(true)}><RiMenuFill /></button>
    </header>
    <nav className={'flex flex-col border-b bg-slate-100 z-10 fixed h-screen w-72 lg:w-96 md:w-80 right-0 shadow-md transform ease-in-out' +
  (isOpen
    ? 'transition-opacity opacity-100 duration-500 translate-x-0'
    : 'transition-all opacity-0 duration-500 translate-x-full')}>
      <div className='p-5 border-b text-pink-400 font-semibold text-xl flex justify-between items-center'>
        Menu <button className='p-2 shadow-md border mr-5 rounded-md hover:rotate-90 hover:duration-500 duration-500' onClick={() => setIsOpen(false)}><RiCloseLine className='text-2xl'/></button>
      </div>
      <ul className='p-2 space-y-1 flex flex-col hover:text-slate-400 text-cyan-500'>
        <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`/`} className='flex flex-row items-center ' onClick={() => setIsOpen(false)}><RiHomeSmileLine className='mx-2 text-xl'/>Home</Link></li>
        <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`pricelist`} className='flex flex-row items-center' onClick={() => setIsOpen(false)}><RiBillLine className='mx-2 text-xl'/>Pricelist</Link></li>
        <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`blog`} className='flex flex-row items-center' onClick={() => setIsOpen(false)}><RiPagesLine className='mx-2 text-xl' />Blog</Link></li>
        <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`ketentuan-sewa`} className='flex flex-row items-center' onClick={() => setIsOpen(false)}><RiFileList3Line className='mx-2 text-xl'/>Ketentuan Sewa</Link></li>
        <li className='p-3 hover:text-pink-400 hover:bg-white rounded-lg'><Link to={`tips-memilih-kamera`} className='flex flex-row items-center' onClick={() => setIsOpen(false)}><RiLightbulbFlashLine className='mx-2 text-xl'/>Tips Memilih Kamera</Link></li>
      </ul>
      <div className='space-x-2 text-5xl flex justify-center items-center mt-5 border-b mx-5 p-5 text-slate-600'>
        <a href='https://www.instagram.com/sewakamera_samarinda' target='_blank'><RiInstagramLine /></a>
        <RiFacebookBoxFill />
        <a href='https://wa.me/6281250115100?text=Halo%20Kak%20Saya%20mau%20booking%20kamera' target='_blank'><RiWhatsappLine /></a>
      </div>
    </nav>
    <div id='main' className='grow overflow-y-auto'>
      <Outlet />
    </div>
    <footer className='lg:p-6 text-center p-5 text-slate-200 bg-gradient-to-r from-pink-400 to-cyan-400 w-full'>Sewa Kamera Samarinda ©2023</footer>
    </div>
  )
}

export default App
