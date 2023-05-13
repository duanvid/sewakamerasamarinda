import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../firebase-config";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.uid === "XfkNvyfPayPbFrJoEL5Yj7IRSxz1") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false)
      }
    })
  }, [])

  return (
    <div className="h-full">
      {
        isAdmin
        ? <div className="flex flex-row h-full overflow-y-auto bg-slate-100">
            <div className="p-5 border-r bg-white">
              <h2 className="text-2xl text-center border-b my-2 w-full p-2 text-slate-800">Dashboard</h2>

              <div className="">
                <ul className="w-[192px]">
                  <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50"><Link to={'/admin/create-post'}>Create Blog Post</Link></li>
                  <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Visitor Count</li>
                  <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Create Payment Receipt</li>
                  <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Create Booking Receipt</li>
                </ul>
              </div>
            </div>
            <div className="overflow-x-auto max-w-[1024px] mx-auto">
              <div className="flex justify-center items-center flex-col grow">
                <Outlet />
              </div>
          </div></div>
        : <h2>You are not the admin</h2>
      }
    </div>
  )
};