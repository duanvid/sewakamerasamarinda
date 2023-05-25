/* eslint-disable no-nested-ternary */
import { get, ref, child } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase-config';
import Loading from '../components/Loading';

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get(child(ref(db), ('blog/XfkNvyfPayPbFrJoEL5Yj7IRSxz1')))
      .then((snapshot) => {
        const result = [];
        snapshot.forEach((snapshotChild) => {
          const keyName = snapshotChild.key;
          const blogData = snapshotChild.val();
          result.push({ key: keyName, data: blogData });
        });
        const resultASC = result.sort((a, b) => b.createdAt - a.createdAt);
        setBlog(resultASC);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    isLoading
      ? (<Loading />)
      : blog.length ? (
        <div className="h-full flex flex-col">
          <h1 className="text-3xl text-center p-5">Blog</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 text-sm">
            { (blog.map((article) => (
              <div key={article.key} className="p-5">
                <div className="border rounded-md h-full">
                  <div className="bg-slate-200 p-5">
                    <div>{article.data.title}</div>
                    <div className="text-sm text-slate-600">{article.data.createdAt}</div>
                  </div>
                  <div className="p-5 text-slate-600">
                    <div className="" dangerouslySetInnerHTML={{ __html: article.data.content.length > 100 ? (`${article.data.content.slice(0, 200)}...`) : article.data.content }} />
                    <button
                      className="mt-2 hover:text-slate-900 text-pink-400"
                      type="button"
                    >
                      <Link to={`${article.key}`}>Read Article —»</Link>

                    </button>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
      )
        : (
          <div className="flex justify-center items-center grow h-full flex-col text-center">
            <h1 className="text-4xl font-semibold">Oops!</h1>
            <p className="text-2xl p-5">Belum Ada Tulisan untuk ditampilkan</p>
            <p className="text-slate-400">Kembali lagi nanti</p>
          </div>
        )
  );
}
