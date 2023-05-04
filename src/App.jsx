import { Outlet, Link } from 'react-router-dom'
import './index.css'

function App() {

  return (
    <>
    <header className='p-5 border-b sticky top-0 bg-white'>
      <h1 className='lg:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 w-fit'>Sewa Kamera Samarinda</h1>
    </header>
    <nav className='flex justify-end border-b sticky top-[72px] lg:top-[81px] bg-white z-10'>
      <ul className='flex flex-row hover:text-slate-400 text-cyan-500'>
        <li className='p-2 hover:text-pink-400'><Link to={`/`}>Home</Link></li>
        <li className='p-2 hover:text-pink-400'><Link to={`pricelist`}>Pricelist</Link></li>
        <li className='p-2 hover:text-pink-400'><Link to={`blog`}>Blog</Link></li>
        <li className='p-2 hover:text-pink-400'><Link to={`tips-memilih-kamera`}>Tips Memilih Kamera</Link></li>
      </ul>
    </nav>
    <div id='main'>
      <Outlet />
    </div>
    <footer className='lg:p-6 text-center p-5 text-slate-200 bg-gradient-to-r from-pink-400 to-cyan-400 fixed bottom-0 w-full'>Sewa Kamera Samarinda ©2023</footer>
    </>
  )
}

export default App
