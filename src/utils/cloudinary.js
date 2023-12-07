import {v2 as cloudinary} from "cloudinary"
import { response } from "express";

import fs from "fs"  //filesystum used for node

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

  
const uploadOnCloudinary = async (localFilePath) =>{
  try{
    if(!localFilePath) return null
    // upload the file on cloud
    const responce = await cloudinary.uploader.upload
    (localFilePath,{
      resource_type:"auto"
    }
    )
    // file uploaded successfull
    console.log("file is uploaded on cloud",response.url);
    return response
  }catch(error){
    // remove the locally saved file as the upload operation got failed
    fs.unlinkSync(localFilePath)
    return null;
  }
}

export {uploadOnCloudinary}