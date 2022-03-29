import React from 'react'
import {ASSETS} from '../../Assets/path'

export const CardOnline = () => {
    return (
        <div className="py-20 flex flex-col-reverse sm:flex-row page-padding">
            <div className="sm:w-1/2 flex items-center justify-center">
                <img src={ASSETS.CARD_ONLINE.EXCEL_ONLINE} alt="" />
            </div>
            <div className='space-y-3 md:space-y-4'>
                <div className=" font-semibold lg:font-bold text-xl text-BLACK-NORMAL">
                    How to convert Excel to PDF online:
                </div>
                <div className="space-y-2 md:space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                        <span className='font-semibold text-base'>1.</span>
                        <span>
                            Drag and drop your file to the Excel to PDF
                            converter.
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className='font-semibold text-base'>2.</span>
                        <span>
                            Wait as the tool saves the spreadsheet to PDF
                            format.
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className='font-semibold text-base'>3.</span>
                        <span>
                            On the result page, continue to modify the output
                            file if needed.
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className='font-semibold text-base'>4.</span>
                        <span>
                            Otherwise, download, share or save the file to
                            Dropbox or Google Drive.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
