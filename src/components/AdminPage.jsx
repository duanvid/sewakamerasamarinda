import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import Loading from "./Loading";
import ErrorPage from "../pages/ErrorPage";
import { signOut } from "firebase/auth";
import Accordion from "./Accordion";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null)
  const handleClick = (index) => {
    activeIndex === index
      ? setActiveIndex(0)
      : setActiveIndex(index)
  }

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
          ? <div className="flex flex-col h-full overflow-y-auto relative overflow-x-hidden">
              <Accordion
                title={'DASHBOARD'}
                content={
                  <ul className="text-slate-600 ">
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50"><Link to={'/admin/create-post'}>Create Blog Post</Link></li>
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Visitor Count</li>
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Create Payment Receipt</li>
                    <li className="py-2 px-5 hover:bg-pink-400 rounded-lg hover:text-slate-50">Create Booking Receipt</li>
                  </ul>
                }
                index={1}
                activeIndex={activeIndex}
                handleClick={handleClick}
              />
              <div className="overflow-y-auto mx-auto w-full">
                <div className="flex justify-center items-center flex-col">
                  <Outlet />
                </div>
              </div>
            </div>
          : <ErrorPage />
        }
      </div>
  )
};