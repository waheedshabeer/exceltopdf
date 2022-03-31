import React, {useState} from 'react'
import {FileUploader} from 'react-drag-drop-files'
import axios from 'axios'
import {ASSETS} from '../../Assets/path'
const fileTypes = ['xlsx', 'xls', 'csv']

export const Upload = () => {
    const [IsLoading, setIsLoading] = useState(false)

    const onUploadFile = (file) => {
        // e.preventDefault()
        // console.log(e)
        setIsLoading(true)
        const formData = new FormData()
        // let file = e.target.files[0]

        formData.append('file', file)
        axios({
            method: 'POST',
            url: 'http://64.227.185.17/',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
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
                    <label
                        htmlFor="image-upload"
                        className="cursor-pointer w-full h-full rounded-md bg-GREEN-MEDIUM flex items-center justify-center border border-dashed border-GRAY-MEDIUM">
                        {IsLoading ? (
                            <div>Loading ...</div>
                        ) : (
                            <img
                                src={ASSETS.UPLOAD.UPLOAD_IMG}
                                alt={''}
                                className="object-contain"
                            />
                        )}
                    </label>
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
