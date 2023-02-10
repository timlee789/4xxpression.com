import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import React, {useReducer, useState} from 'react';
import { getError } from "../utils/error";
import { toast } from 'react-toastify';
import { uploadCloudinary } from "@/pages/api/upload";

function reducer(state, action) {
    switch (action.type) {
        case 'UPLOAD_REQUEST':
            return { ...state, loading: true, error: ''};
        case 'UPLOAD_SUCCESS':
            return { ...state, loading: false, products: action.payload, error: ''}
        case 'UPLOAD_FAIL':
            return { ...state, loading: false, error: action.payload};
        default: 
            return state;
    }
}
export default function Registrationform() {
    const[images, setImages] = useState([])
    const[links, setLinks] = useState([])
    const [{ loading, error, products}, dispatch] = useReducer(reducer, {
        loading: true,
        products: [],
        error: '',
    })
    const router = useRouter();

    // const uploadHandler = async (e) => {
    //     setImages(e.target.files)
    //     console.log(e.target.files)
    //     try{
    //         let arr =[]
    //         for(let i = 0; i < images.length; i++) {
    //             const data = await uploadCloudinary(images[i])
    //             arr.push(data)
    //         }
    //         setValue('imageField', arr.url)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
    } = useForm();
    const submitHandler = async ({
            name,
            tel,
            email,
            instaid,
            imageField
    }) => {
        try{
            await axios.post('/api/register', {
                name, tel, email, instaid, imageField
            });
            router.push('/thanks')
        } catch (err) {
            
        }
    }
    
    const uploadHandler = async (e, imageField = 'image') => {
        const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
        try {
          dispatch({ type: 'UPLOAD_REQUEST' });
          const {
            data: { signature, timestamp },
          } = await axios('/api/cloudinary-sign');
    
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append('file', file);
          formData.append('signature', signature);
          formData.append('timestamp', timestamp);
          formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
          const { data } = await axios.post(url, formData);
          dispatch({ type: 'UPLOAD_SUCCESS' });
          setValue('imageField', data.secure_url);
          toast.success('File uploaded successfully');
        } catch (err) {
          dispatch({ type: 'UPLOAD_FAIL', payload: getError(err)});
          toast.error(getError(err));
        }
    }
  return (
    <div>
        <h1 className="mb-4 mt-8 text-2xl font-bold text-blue-600">Registration</h1>

        <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
            <div className="mb-4">
                <label htmlFor="name"><div className="text-black-600">Name</div></label>
                <input type='text' 
                        {...register('name', {required: "Please enter your name"})}
                        id='name'
                        className="w-full bg-yellow-400"
                ></input>
                {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="tel"><div className="text-black-600">Tel</div></label>
                <input type='text' 
                        {...register('tel', {required: "Please enter your Phone"})}
                        id='tel'
                        className="w-full bg-yellow-400"
                ></input>
                {errors.tel && (
                    <div className="text-red-500">{errors.tel.message}</div>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="email"><div className="text-black-600">Email</div></label>
                <input type='text' 
                        {...register('email', {required: "Please enter your email"})}
                        id='email'
                        className="w-full bg-yellow-400"
                        
                ></input>
                {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="instaid" ><div className="text-black-600">instagram ID</div></label>
                <input type='text' 
                        {...register('instaid', {required: "Please enter your instaid"})}
                        id='instaid'
                        className="w-full bg-yellow-400"
                        autoFocus
                ></input>
                {errors.instaid && (
                    <div className="text-red-500">{errors.instaid.message}</div>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="photo"></label>
                <input type='text' 
                        {...register('imageField', {required: "Please enter Photo"})}
                        id='imageField'
                        hidden={true}
                        className="w-full bg-yellow-400"
                        
                ></input>
                {errors.imageField && (
                    <div className="text-red-500">{errors.imageField.message}</div>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="imageFile" ><div className="text-black-600">Upload Image</div></label>
                <input
                        type="file"
                        className="w-full"
                        id="imageFile"
                        onChange={uploadHandler}
                />
                {/* {loading && <div>Uploading....</div>} */}
            </div>
            <div className="mb-8">
                <button class='primary-button ml-48'>Submit</button></div>
        </form>
    </div>
  )
}

