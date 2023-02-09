import axios from 'axios';

export const uploadCloudinary = async(file) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "betest")
    const {data} = await axios.post('https://api.cloudinary.com/v1_1/dlsohati1/upload', formData)
    return {url: data?.secure_url}
    //return {publicId: data?.public_id, url: data?.secure_url}
}