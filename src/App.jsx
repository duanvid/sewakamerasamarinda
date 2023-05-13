import { Outlet } from 'react-router-dom'
import './index.css'
import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-screen flex flex-col'>
      <Header setIsOpen={setIsOpen} />
      <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div id='main' className='grow overflow-y-auto'>
      <Outlet />
    </div>
    <footer
      className='lg:p-6 text-center p-5 text-slate-50 bg-gradient-to-r from-pink-400 to-cyan-400 w-full'
    >
        Sewa Kamera Samarinda ©2023
    </footer>
    </div>
  )
}

export default App
