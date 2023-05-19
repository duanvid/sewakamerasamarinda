import { useState } from 'react'
import pl from '../assets/pricelist.json'
import Pricelist from '../components/Pricelist'
import RentalTerm from '../components/RentalTerm'
import RentalTips from '../components/RentalTips'
import Accordion from '../components/Accordion'

export default function Pricelists() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    activeIndex === index
      ? setActiveIndex(0)
      : setActiveIndex(index)
  }

  return (
    <div className='overflow-hidden'>
      <Accordion
        title={'DSLR'}
        content={
          <div className='grid md:grid-cols-2 max-w-4xl p-5 gap-x-2 gap-y-8 grow mx-auto'>
            {pl.DSLR.map((kamera, index) => {
              return (
                <Pricelist data={kamera} key={index}/>
              )
            })}
          </div>}
        index={1}
        activeIndex={activeIndex}
        handleClick={handleClick}/>
      <Accordion
        title={'MIRRORLESS'}
        content={
          <div className='grid md:grid-cols-2 max-w-4xl p-5 gap-x-2 gap-y-8 grow mx-auto'>
            <Pricelist data={pl.mirrorless[0]} key={'a6000'} />
          </div>}
        index={2}
        activeIndex={activeIndex}
        handleClick={handleClick}/>
      <Accordion title={'LENSA'}content={<Pricelist />} index={3} activeIndex={activeIndex} handleClick={handleClick}/>
      <Accordion title={'PROSEDUR SEWA'} content={<RentalTerm />} index={4} activeIndex={activeIndex} handleClick={handleClick}/>
      <Accordion title={'TIPS MEMILIH KAMERA'} content={<RentalTips />} index={5} activeIndex={activeIndex} handleClick={handleClick}/>
    </div>
  )
}