import React, {useState} from 'react'
import {FileUploader} from 'react-drag-drop-files'
import axios from 'axios'
import {ASSETS} from '../../Assets/path'
const fileTypes = ['xlsx', 'xls', 'csv']

export const Upload = () => {
    const [IsLoading, setIsLoading] = useState(false)

    const onUploadFile = (file) => {
        console.log(file)
        // e.preventDefault()
        // console.log(e)
        setIsLoading(true)
        const formData = new FormData()
        // let file = e.target.files[0]

        formData.append('file', file)
        axios({
            method: 'POST',
            url: 'https://43bf-39-53-102-121.ngrok.io',
            data: formData,
            headers: {
                // 'Content-Type': 'multipart/form-data',
                // 'Access-Control-Allow-Origin': '*',
            },
        })
            .then(({data}) => {
                console.log(data)
                file = null
                // alert(data.detail)
                setIsLoading(false)
                window.open(data?.pdf_url)
            })
            .catch((error) => {
                setIsLoading(false)
                console.log('ERROR ', error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="page-padding py-20 space-y-10">
            <div className="flex flex-col space-y-2 items-center justify-center">
                <div className="flex items-center text-BLACK-NORMAL space-x-2">
                    <img src={ASSETS.LOGO} alt="" className="" />
                    <div className="text-center font-semibold lg:font-bold text-xl md:text-2xl text-BLACK-NORMAL">
                        Excel to PDF
                    </div>
                </div>
                <div className="text-xl font-light">
                    Convert your Excel spreadsheet to PDF
                </div>
            </div>

            <div className="bg-GREEN-LIGHT w-full h-80 p-3">
                <FileUploader
                    handleChange={onUploadFile}
                    name="file"
                    types={fileTypes}>
                    <div
                        htmlFor="image-upload"
                        className="cursor-pointer w-full h-full rounded-md bg-GREEN-MEDIUM flex items-center justify-center border border-dashed border-GRAY-MEDIUM">
                        {IsLoading ? (
                            <div>Loading ...</div>
                        ) : (
                            <div className="flex flex-col items-center justify-center space-y-4">
                                {/* <img
                                    src={ASSETS.UPLOAD.UPLOAD_HEADER_LOGO}
                                    alt={''}
                                    className="object-contain w-16 h-16"
                                /> */}
                                <i className="fa fa-file-excel text-WHITE-NORMAL text-5xl md:text-6xl"></i>
                                <div className="bg-WHITE-NORMAL p-5 flex items-center justify-center text-BLACK-NORMAL py-3 rounded-sm space-x-2">
                                    <img
                                        src={ASSETS.UPLOAD.UPLOAD_BTN_ICON}
                                        alt={''}
                                        className="object-cover"
                                    />                                    
                                    <i className="fa fa-file-plus text-BLACK-NORMAL text-lg"></i>
                                    <div className="uppercase text-sm font-bold">
                                        Chose Files
                                    </div>
                                </div>
                                <div className="font-semibold text-WHITE-NORMAL text-sm md:text-base">
                                    or drop Excel files here
                                </div>
                            </div>
                            // <img
                            //     src={ASSETS.UPLOAD.UPLOAD_IMG}
                            //     alt={''}
                            //     className="object-contain"
                            // />
                        )}
                    </div>
                    {/* <input
                    type="file"
                    className="hidden"
                    name="upload-file"
                    onChange={(e) => onUploadFile(e)}
                    id={`image-upload`}
                    accept=".xlsx, .xls, .csv"
                    // disabled={IsLoading}
                /> */}
                </FileUploader>
            </div>
        </div>
    )
}
