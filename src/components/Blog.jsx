import { get, ref, child } from "firebase/database"
import { useEffect, useState } from "react"
import { db } from "../firebase-config"

export default function Blog() {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    get(child(ref(db), ('blog/XfkNvyfPayPbFrJoEL5Yj7IRSxz1')))
      .then((snapshot) => {
        const result = []
        snapshot.forEach((snapshotChild) => {
          const keyName = snapshotChild.key;
          const blogData = snapshotChild.val()
          result.push({ "key": keyName, "data": blogData})
        })
        setBlog(result)
      })
  }, [])

  return (
    blog
      ? (
      <div className="h-full flex flex-col">
        <h1 className="text-3xl text-center p-5">Blog</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {blog.map((article) => {
          return (
            <div key={article.key} className="p-5">
              <div className="border rounded-md h-full">
                <div className="bg-slate-200 p-5">
                  <div>{article.data.title}</div>
                  <div className="text-sm">{article.data.createdAt}</div>
                </div>
                <div className="p-5 " dangerouslySetInnerHTML={{ __html: article.data.content.length > 100 ? (article.data.content.slice(0, 200) + '... read more') : article.data.content }}></div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
      )
      : (
        <div className="flex justify-center items-center grow h-full flex-col">
          <h1 className="text-4xl font-semibold">Oops!</h1>
          <p className="text-2xl p-5">Belum Ada Tulisan untuk ditampilkan</p>
          <p className="text-slate-400">Kembali lagi nanti</p>
        </div>
      )
  )
}