import { useEffect, useState } from "react"
import { auth } from "../firebase-config"

export default function UserDashboard() {
  const [user, setUser] = useState({
    displayName: "Guest",
    email: "email",
    photoURL: ""
  })

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    }, [])
  })


  return (
    <div className="flex p-5 flex-wrap mx-auto max-w-4xl justify-center items-start">
      <div className="p-3 container border text-sm flex flex-col justify-center rounded-md shadow-md max-w-sm m-2" >
        <p>Histori sewa</p>
        <p>Belum ada kamera yang pernah disewa ...</p>
      </div>
      <div className=" flex-initial m-2 border p-3 rounded-md shadow-md container flex flex-row max-w-sm ">
        <img src={user.photoURL} alt={user.displayName} className="w-16 h-16 border rounded-full"/>
        <div className="flex justify-center flex-col px-5">
          <h1>Hello, {user.displayName}</h1>
          <p className="text-xs">{user.email}</p>
        </div>
      </div>
      <div className="grow m-2 container border shadow-md rounded-md p-3 max-w-sm min-h-[256px]">
        <p>Pilih Kamera</p>
      </div>
      <div className="container border shadow-md rounded-md p-3 max-w-sm m-2">
        <p>Artikel untuk dibaca</p>
      </div>
    </div>
  )
}