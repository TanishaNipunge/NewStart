import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from "fs";

cloudinary.config({ 
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY', 
    api_secret: 'process.env.CLOUDINARY_KEY_SECRET' // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath)return null
        const response = await cloudinary.uploader.upload
        (localFilePath,{
            resource_type:'auto'
        })
        //file uploaded successfully
        console.log("file is uploaded successfully",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)//removethe locally saved temp file as the upolad operation got failed
        return null;
    }
}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    {public_id:"olympic_flag"},
    function(error, result) {console.log(result);});