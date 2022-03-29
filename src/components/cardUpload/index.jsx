import React from 'react'
import {ASSETS} from '../../Assets/path'

export const Upload = () => {
    return (
        <div className="page-padding py-20 space-y-10">
            <div className='flex flex-col space-y-2 items-center justify-center'>
                <div className='flex items-center text-BLACK-NORMAL space-x-2'>
                    <img src={ASSETS.LOGO} alt="" className="" />
                    <div className="text-center font-semibold lg:font-bold text-xl md:text-2xl text-BLACK-NORMAL">
                        Excel to PDF
                    </div>
                </div>
                <div className='text-xl font-light'>Convert your Excel spreadsheet to PDF</div>
            </div>
            <div className="bg-GREEN-LIGHT w-full h-80 p-3">
                <label
                    htmlFor="image-upload"
                    className="cursor-pointer w-full h-full rounded-md bg-GREEN-MEDIUM flex items-center justify-center border border-dashed border-GRAY-MEDIUM">
                    <img
                        src={ASSETS.UPLOAD.UPLOAD_IMG}
                        alt={''}
                        className="object-contain"
                    />
                </label>
                <input
                    type="file"
                    className="hidden"
                    // onChange={(e) => UploadImage(e, index)}
                    id={`image-upload`}
                    accept=".xlsx, .xls, .csv"
                    alt=""
                />
            </div>
        </div>
    )
}
