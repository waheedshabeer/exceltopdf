import React from 'react'

export const Footer = () => {
    return (
        <div className="px-2 sm:px-5 md:px-10 py-4 text-xs md:text-sm bg-GRAY-BASE flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between">
            <div className="space-x-1">
                <span>©</span>
                <span className="">
                    2022 Smallpdf AG — Made withfor the people of the internet.
                </span>
            </div>
            <div className='space-x-2 text-BLACK-NORMAL'>
                <span className='cursor-pointer'>Privacy Notice</span>
                <span className='cursor-pointer'>Terms & Conditions</span>
                <span className='cursor-pointer'>Imprint</span>
                <span className='cursor-pointer'>Terms & Conditions</span>
                <span className='cursor-pointer'>Contact Us</span>
                <span className='cursor-pointer'>English</span>
            </div>
        </div>
    )
}
