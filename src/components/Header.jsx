import { RiMenuFill } from "react-icons/ri"
import { Link } from "react-router-dom"

export default function Header({ setIsOpen }) {
  return (
    <header className='shadow-md bg-white flex justify-between items-center'>
        <h1
          className='lg:text-4xl text-2xl font-bold text-transparent
          bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400
          w-fit antialiased p-5'
        >
          <Link to={'/'}>Sewa Kamera Samarinda</Link>
        </h1>
        <div className="p-5">
          <button
            className='p-2 border rounded-md text-2xl hover:bg-cyan-300
            hover:duration-500 duration-500'
            onClick={() => setIsOpen(true)}
            aria-label="Menu Button"
          >
            <RiMenuFill aria-label="Menu"/>
          </button>
        </div>
    </header>
  )
}