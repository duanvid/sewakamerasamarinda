import './App.css'
import Pricelist from './components/Pricelist'
import pl from './assets/pricelist.json'

function App() {

  return (
    <>
    <header className='p-5 text-red-400 border-b'>
      <h1 className='lg:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 w-fit'>Sewa Kamera Samarinda</h1>
    </header>
    <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-5 gap-2 gap-y-3 h-full grow'>
    {pl.DSLR.map((kamera, index) => {
      return (
        <Pricelist data={kamera} key={index} />
      )
    })}
    </div>
    <footer className='lg:p-6 text-center p-5 text-slate-200 bg-gradient-to-r from-pink-400 to-cyan-400'>Sewa Kamera Samarinda ©2023</footer>
    </>
  )
}

export default App
