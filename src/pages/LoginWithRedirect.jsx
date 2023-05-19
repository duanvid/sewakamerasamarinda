import { FacebookAuthProvider, getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function LoginWithRedirect() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getRedirectResult(auth)
    .then((result) => {
      if (result === null) {
        setIsLoading(false)
        return
      } else {
        setIsLoading(true);
        (result.user.uid === "XfkNvyfPayPbFrJoEL5Yj7IRSxz1")
          ? navigate('/admin')
          : navigate('/dashboard')
      }
    })
    .catch((error) => {
      window.alert(error)
    })
  }, [])

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  }
  const handleLogin2 = () => {
    signInWithPopup(auth, new FacebookAuthProvider());
  }
  return (
    isLoading
      ? (<Loading />)
      : (<div className="flex justify-center items-center h-full bg-slate-100">
          <div className="bg-white border w-72 h-80 rounded-lg shadow-md flex flex-col justify-center items-center p-5">
            <div className="text-3xl self-start px-6 underline">Login</div>
            <div className="grid h-fit gap-3 my-10 w-full">
            <button className="border-2 py-2 px-6  rounded-lg text-slate-800" onClick={handleLogin}>Login With Google</button>
            </div>
          </div>
        </div>)
  )
}