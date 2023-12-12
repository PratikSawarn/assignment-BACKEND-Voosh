import {v2 as cloudinary} from "cloudinary"
import fs from "fs"  //filesystum used for node

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) =>{
  try{
    if(!localFilePath) return null
    // upload the file on cloud
    const response = await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    }
    )
    // file uploaded successfull
    console.log("file is uploaded on cloud",response.url);
    return response;
  }catch(error){
    // remove the locally saved file as the upload operation got failed
    fs.unlinkSync(localFilePath)
    return null;
  }
}

export {uploadOnCloudinary}