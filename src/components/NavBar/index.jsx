import React from 'react'
import {ASSETS} from '../../Assets/path'

export const NavBar = () => {
    return (
        <div className="page-padding py-5 border-b border-GRAY-NORMAL bg-GRAY-LIGHT">
            <div className='flex items-center space-x-2 md:space-x-3 cursor-pointer'>
                <img src={ASSETS.NAVBAR.NAV_LOGO} alt="" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                <div className='text-sm md:text-base font-bold lg:font-extrabold lg:text-xl'>A1office</div>
            </div>
        </div>
    )
}
