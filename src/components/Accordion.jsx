export default function Accordion({ title, content, index, activeIndex, handleClick }) {
  return (
    <>
    <div
      className={`flex group flex-col ${activeIndex === index ? 'is-active' : ''}`}
    >
      <div className='flex justify-between container flex-row mx-auto max-w-4xl border-b
        group-[.is-active]:font-semibold
        group-[.is-active]:shadow-md  duration-500 hover:bg-slate-100'
        onClick={() => handleClick(index)}>
        <div className='p-5'>{title}</div>
        <div className='rotate-90 group-[.is-active]:-rotate-90 p-5'>
          {'>'}
        </div>
      </div>

      <div className={`flex overflow-hidden max-h-0 duration-500
        group-[.is-active]:max-h-[2000px] ease-in-out mx-auto` } >
        <div className='max-h-0 overflow-hidden group-[.is-active]:max-h-[2000px] duration-1000'>
          {content}
        </div>
      </div>

    </div>
    </>
  )
}