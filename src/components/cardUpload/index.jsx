import React, {useState} from 'react'
import {FileUploader} from 'react-drag-drop-files'
import axios from 'axios'
import {ASSETS} from '../../Assets/path'
import swal from 'sweetalert'
const fileTypes = ['xlsx', 'xls']

export const Upload = () => {
    const [IsLoading, setIsLoading] = useState(false)

    const onUploadFile = (file) => {
        // e.preventDefault()
        console.log(file.name.split('.')[1])
        setIsLoading(true)
        const formData = new FormData()
        // let file = e.target.files[0]
        formData.append('file', file , Date.now() + "." + file.name.split('.')[1])
        console.log(formData)
        axios({
            method: 'POST',
            url: 'https://exceltopdf.a1office.co/upload/',
            // url: 'https://4d19-39-53-102-121.ngrok.io',
            data: formData,
            headers: {
                // 'Content-Type': 'multipart/form-data',
                // 'Access-Control-Allow-Origin': '*',
            },
        })
            .then(({data}) => {
                console.log(data)
                file = null
                console.log(file)
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
        <div
            className="page-padding py-10 space-y-24 2xl:space-y-32  bg-cover bg-no-repeat flex flex-col min-h-screen"
            style={{backgroundImage: `url(${ASSETS.UPLOAD.HEADER_BG})`}}>
            <img src={ASSETS.NAVBAR.NAV_LOGO} alt="" className="w-14 h-14" />
            <div className="bg-WHITE-NORMAL  w-full self-center px-16  py-10  2xl:py-16 rounded-2xl shadow-lg">
                <div className="pb-10 flex space-x-8">
                    <img
                        src={ASSETS.UPLOAD.HEADER_LOGO}
                        alt=""
                        className="w-16 h-16 object-cover"
                    />
                    <div className=" text-left">
                        <div className=" font-semibold lg:font-bold text-xl md:text-2xl text-BLACK-NORMAL">
                            Excel to PDF
                        </div>

                        <div className="text-xl font-normal">
                            Convert your Excel spreadsheet to PDF
                        </div>
                    </div>
                </div>
                <FileUploader
                    handleChange={onUploadFile}
                    fileOrFiles={null}
                    name={Date.now()}
                    onTypeError={(err) => swal('Error!', err, 'error')}
                    types={fileTypes}>
                    <div
                        htmlFor="image-upload"
                        className="cursor-pointer h-48 2xl:h-60 w-full rounded-xl bg-GREEN-EXTRA_LIGHT flex items-center justify-center border border-GREEN-BASE border-dashed ">
                        {IsLoading ? (
                            <div className="text-BLACK-NORMAL">Loading ...</div>
                        ) : (
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div  title='excel to pdf' className="bg-GREEN-BASE text-WHITE-NORMAL px-10 flex items-center justify-center  py-3 rounded-md space-x-2">
                                    <div  className="uppercase text-sm font-bold ">
                                        Choose Files
                                    </div>
                                </div>
                                <div className="font-semibold text-GREEN-BASE text-sm md:text-base">
                                    or drop a file here
                                </div>
                            </div>
                        )}
                    </div>
                </FileUploader>
            </div>
        </div>
    )
}
