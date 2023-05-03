import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <header className='p-5 border-b sticky top-0 bg-white'>
      <h1 className='lg:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 w-fit'>Sewa Kamera Samarinda</h1>
    </header>
    <div id='main'>
      <Outlet />
    </div>
    <footer className='lg:p-6 text-center p-5 text-slate-200 bg-gradient-to-r from-pink-400 to-cyan-400 fixed bottom-0 w-full'>Sewa Kamera Samarinda ©2023</footer>
    </>
  )
}

export default App
