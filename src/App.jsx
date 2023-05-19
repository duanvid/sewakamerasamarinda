import { Outlet } from 'react-router-dom'
import './index.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import { auth } from './firebase-config'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    })
  })

  return (
    <div className='h-screen flex flex-col  font-poppins relative'>
      <Header setIsOpen={setIsOpen} />
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} isLogin={isLogin}/>
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
