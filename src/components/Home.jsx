import Pricelists from "./Pricelists";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl text-center p-5 border m-2 rounded-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Preserve your memories with our cameras</h1>
      <Pricelists />
    </div>
  )
}