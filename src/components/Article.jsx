import { child, get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { db } from '../firebase-config';

export default function Article() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.replace(/^\/+/, '');

  useEffect(() => {
    get(child(ref(db), (`blog/XfkNvyfPayPbFrJoEL5Yj7IRSxz1/${articleId}`)))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setArticle(snapshot.val());
        } else {
          console.log('No data available');
        }
      }).catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="w-full bg-white border-t shadow">
        <div className="sm:container p-3 font-medium w-full mx-auto text-slate-500 font-sans">{pathnameWithoutSlash.toUpperCase()}</div>
      </div>
      <div className="p-5 max-w-3xl mx-auto font-poppins">
        <h2 className="text-3xl p-5">{article.title}</h2>
        <p className="p-5 text-slate-600">
          Posted on
          {' '}
          {article.createdAt}
        </p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} className="p-5 text-slate-700" />
        <div />
      </div>

    </>
  );
}
