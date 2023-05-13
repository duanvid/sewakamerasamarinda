import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {

  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      if (result.user.uid === "XfkNvyfPayPbFrJoEL5Yj7IRSxz1") {
        navigate('/admin')
      } else {
        navigate('/')
    }} catch (error) {
      window.alert('login woy')
    }
  }

  return (
    <div className='flex justify-center items-center h-full flex-col'>
      <h2 className='text-2xl'>Login</h2>
      <button onClick={signInWithGoogle} className='border px-7 py-2 m-5 rounded-md bg-pink-400 text-slate-50'>Sign in with google</button>
    </div>
  )
}