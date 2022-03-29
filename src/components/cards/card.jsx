import React from 'react'
import { CARDS } from './constant'

export const Card = () => {
  return (
    <div className='page-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 sm:gap-y-4 gap-x-8 border-b border-GRAY-NORMAL  pb-20 '>
        {
            CARDS.map((item,index)=>
                <div key={index} className='text-BLACK-NORMAL flex flex-col items-center justify-center space-y-2 h-52  '>
                    <img src={item.IMG} alt={item.IMG} className=""/>
                    <div className='font-semibold'>
                        {item.HEADING}
                    </div>
                    <p className='text-base text-center h-10'>
                        {item.DESCRIPTION}
                    </p>
                </div>
            )
        }
    </div>
  )
}
