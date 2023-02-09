import React, { useState } from 'react'
import { uploadCloudinary } from './api/upload'

function CloudinaryUpload() {
    const[images, setImages] = useState([])
    const[links, setLinks] = useState([])
    const[loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            let arr = []
            setLoading(true)
            for(let i = 0; i < images.length; i++) {
                const data = await uploadCloudinary(images[i])
                arr.push(data)
            }
            setLoading(false)
            setLinks(arr)
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type='file'
                multiple={true}
                onChange={() => setImages(event.target.files)}
            />
            <button disabled={loading} type='submit'>{loading? 'Loading...' : "Uplod"}</button>
        </form>
       
        {
            links && links.length > 0 && links.map(link => {
                return (
                    <div key={link?.publicId}>
                        <p>PublicId: {link?.publicId}</p>
                        <p>url: {link?.url}</p>
                        <img width={300} src={link?.url} alt="dfd" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default CloudinaryUpload