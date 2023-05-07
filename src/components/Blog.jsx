export default function Blog({ blog }) {
  return (
    blog
      ? (
      <div className="h-full flex">
        <h1 className="text-3xl text-center">{blog.title}</h1>
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