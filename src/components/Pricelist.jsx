import { useRef } from "react"

export default function Pricelist({data, index}) {
  console.log(index%2 === 0)
  const detailRef = useRef(null)

  const handleClick = () => {
    detailRef.current.classList.toggle('h-0')
  }
  const pricelist = data.pricelist

  return (
    <div className="col-span-1 mx-auto flex justify-center items-center box-content w-full">
      <div className={'shadow-sm rounded-md p-5 max-w-[384px] overflow-x-auto w-full overflow-y-hidden' +
        ((index%2===0)
        ? ' shadow-pink-400'
        : ' shadow-cyan-400'
  )}>
        <div className="flex flex-row items-center">
          <div className="rounded-full p-2 shadow-md mr-5 basis-1/4">
          <img
          src="assets/60d.png"
          alt={data.type}
          className="w-[64px] h-[64px]"/>
          </div>
        <div className="flex flex-col items-start border-b basis-3/4" onClick={handleClick}>
          <div className="text-lg font-semibold">{data.type}</div>
          <div className="text-xs">{data.tag}</div>
          </div>
        </div>
        <div ref={detailRef} className="overflow-hidden">
          <div className="grid grid-flow-col min-w-[256px] text-xs mt-5" >
          <ul className="grid grid-flow-row">
            <li className="font-semibold mb-2">
              Lensa
            </li>
            <li className="bg-slate-200 py-2">
              + {pricelist[0].lensa}
            </li>
            <li className="py-2">
              + {pricelist[1].lensa}
            </li>
            <li className="bg-slate-200 py-2">
              + {pricelist[2].lensa}
            </li>
          </ul>
          <ul className="grid grid-flow-row text-center">
            <li className="font-semibold mb-2">
              1-6 jam
            </li>
            <li className="bg-slate-200 py-2">
              {pricelist[0].tier1}
            </li>
            <li className="py-2">
              {pricelist[1].tier1}
            </li>
            <li className="bg-slate-200 py-2">
              {pricelist[2].tier1}
            </li>
          </ul>
          <ul className="grid grid-flow-row text-center">
            <li className="font-semibold mb-2">
              7-12 jam
            </li>
            <li className="bg-slate-200 py-2">
              {pricelist[0].tier2}
            </li>
            <li className="py-2">
              {pricelist[1].tier2}
            </li>
            <li className="bg-slate-200 py-2">
              {pricelist[2].tier2}
            </li>
          </ul>
          <ul className="grid grid-flow-row text-center">
            <li className="font-semibold mb-2">
              13-24 jam
            </li>
            <li className="bg-slate-200 py-2">
              {pricelist[0].tier3}
            </li>
            <li className="py-2">
              {pricelist[1].tier3}
            </li>
            <li className="bg-slate-200 py-2">
              {pricelist[2].tier3}
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}