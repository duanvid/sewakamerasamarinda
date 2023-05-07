import { RiMenuFill } from "react-icons/ri"

export default function Header({ setIsOpen }) {
  return (
    <header className='p-5 border-b bg-white flex justify-between items-center'>
        <h1 className='lg:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 w-fit'>Sewa Kamera Samarinda</h1>
        <button className='p-2 border rounded-md text-2xl hover:bg-cyan-300 hover:duration-500 duration-500' onClick={() => setIsOpen(true)}><RiMenuFill /></button>
      </header>
  )
}