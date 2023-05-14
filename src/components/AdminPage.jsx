import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { signOut } from "firebase/auth";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  const handleLogOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        window.alert(error)
      })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.uid === "XfkNvyfPayPbFrJoEL5Yj7IRSxz1") {
        setIsAdmin(true);
        setIsLoading(false);
      } else {
        setIsAdmin(false)
        setIsLoading(false);
      }
    })
  }, [])

  return (
    isLoading
      ? <Loading />
      : <div className="h-full">
        {
          isAdmin
          ? <div className="flex flex-row h-full overflow-y-auto bg-slate-100 relative">
              <div className="p-5 border-r bg-white flex flex-col h-full static">
                <h2 className="text-2xl text-center border-b-2 my-2 w-full p-2 text-slate-800">Dashboard</h2>

                <div className="grow">
                  <ul className="w-[192px] text-slate-600">
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50"><Link to={'/admin/create-post'}>Create Blog Post</Link></li>
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Visitor Count</li>
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Create Payment Receipt</li>
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Create Booking Receipt</li>
                  </ul>
                </div>
                <div className="p-5 flex border-t-2">
                  <button className="mx-auto border py-2 px-6 rounded-lg bg-pink-400 text-slate-100" onClick={handleLogOut}>Sign Out</button>
                </div>
              </div>
              <div className="overflow-y-auto mx-auto w-full">
                <div className="flex justify-center items-center flex-col">
                  <Outlet />
                </div>
            </div></div>
          : <ErrorPage />
        }
      </div>
  )
};