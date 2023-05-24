import React from 'react'
interface Props {
    text:string;
    number:number;
}
const SingleBenefit = ({text, number}:Props) => {
  return (
    <div className='benefit relative flex items-start justify-start  md:w-auto h-[170px] md:my-10 gap-1 md:gap-3 '>
        <h2 className='benefit_number relative text-[100px] text-[#ff7300] font-bold'>{number.toString()}</h2>
        <div className='break_border border-[1px] border-[#FF7400] h-full'></div>
        <div className='benefit_desc break-words max-w-[200px] flex items-center'>
            <p className='ml-3 text-[16px] font-semibold text-[#444548]'>{text}</p>
        </div>                    
    </div>
  )
}

export default SingleBenefit
