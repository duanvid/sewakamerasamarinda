import { signInWithPopup } from 'firebase/auth'
import { auth, db, provider } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { ref, set, get } from 'firebase/database'
import { useState } from 'react'
export default function LoginPage() {

  const [blog, setBlog] = useState(null)
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      if (result.user.uid === "XfkNvyfPayPbFrJoEL5Yj7IRSxz1") {
        navigate('/blog')
      } else {
        navigate('/')
    }} catch (error) {
      window.alert('login woy')
      console.log(error)
    }
  }

  const handleDatabase = async () => {
    const data = await get(ref(db, 'blog/' + '1'))
    set(ref(db, 'wawa'), {
      data: "bergembul"
    })
    console.log(data.val())
    setBlog(data.val())
  }

  const post = (item) => {
    return (
      <>
      <div>{item.title}</div>
      <div>{item.content}</div></>
    )
  }

  let wawa

  if (blog) {
    wawa = post(blog)
  }

  return (
    <div>
      <p>sign in with google</p>
      <button onClick={signInWithGoogle}> Sign in with google button</button>
      <button onClick={handleDatabase}>Get Database</button>
      <div>{wawa}</div>
    </div>
  )
}