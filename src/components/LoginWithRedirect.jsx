import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

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
        setIsLoading(true)
        navigate('/admin')
      }
    })
    .catch((error) => {
      window.alert(error)
    })
  }, [])

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  }
  return (
    isLoading
      ? (<Loading />)
      : (<div className="flex justify-center items-center h-full flex-col bg-slate-100">
          <div className="bg-white border w-60 h-72 rounded-lg shadow-md flex items-center justify-center">
            <button className="border py-2 px-6 bg-pink-400 rounded-lg text-slate-100" onClick={handleLogin}>Login With Google</button>
          </div>
        </div>)
  )
}