import React, { useRef } from 'react';
import { ref, push } from 'firebase/database';
import ReactQuill from 'react-quill';
import { auth, db } from '../firebase-config';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
    ['clean'],
  ],
};

export default function CreatePost() {
  const blogTitle = useRef();
  const blogContent = useRef();

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const post = await push(ref(db, `blog/${auth.currentUser.uid}`), {
      title: blogTitle.current.value,
      content: blogContent.current.value,
      createdAt: new Date().toLocaleDateString('id'),
    }).key;
    console.log(post);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-5 w-full max-w-[1024px]">
      <h2 className="p-5 text-lg">Create Blog Post</h2>
      <form action="submit" className="grow bg-white h-full flex flex-col border p-5 rounded-md shadow-md w-full overflow-x-auto" onSubmit={onSubmitHandle}>
        <label htmlFor="blogitle" className="p-2 text-slate-800">Title</label>
        <input type="text" id="blogtitle" name="blogtitle" className="border-b p-2 rounded-md" placeholder="Blog Title" required ref={blogTitle} />
        <label htmlFor="blogcontent" className="p-2 text-slate-800">Content</label>
        <ReactQuill className="flex flex-col grow" theme="snow" ref={blogContent} id="blogcontent" modules={modules} placeholder="Your content goes here ..." name="blogcontent" />
        <label htmlFor="blogimg" className="p-2">Image</label>
        <input type="file" name="blogimg" id="blogimg" className="p-2 border max-w-fit" />
        <button type="submit" className="py-2 px-6 border rounded-md bg-pink-400 text-slate-50 w-fit self-center mt-5">Submit</button>
      </form>
    </div>
  );
}
