import React from 'react'
import {CARDS} from './constant'

export const CardTwo = () => {
    return (
        <div className="py-20 page-padding space-y-10 lg:space-y-14 border-b border-GRAY-NORMAL bg-GRAY-LIGHT">
            <div className="text-center font-semibold lg:font-bold text-xl text-BLACK-NORMAL">
                How To Convert Excel To PDF
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 sm:gap-y-4 gap-x-8  ">
                {CARDS.map((item, index) => (
                    <div
                        key={index}
                        className="text-BLACK-NORMAL space-y-1 h-full">
                        <img
                            src={item.IMG}
                            alt={item.IMG}
                            className="h-40 object-cover cursor-pointer"
                        />
                        <div className="font-semibold text-xs md:text-sm text-GRAY-MEDIUM hover:underline duration-1000 cursor-pointer uppercase">
                            {item.HEADING}
                        </div>
                        <div className="text-sm sm:text-base  font-semibold cursor-pointer hover:underline duration-1000">
                            {item.HEADING_TWO}
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-left cursor-pointer">
                            {item.DESCRIPTION}
                        </p>
                    </div>
                ))}
            </div>
            <div className='text-center text-sm space-x-1 cursor-pointer text-BLUE-LIGHT font-medium'><span>Show More </span><span className='text-base'>&#8594;</span></div>
        </div>
    )
}
