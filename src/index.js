import dotenv from "dotenv"
import connectDb from "./db/index.js";
import {app} from "./app.js"


dotenv.config({ path:'./.env' })


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on Port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongoDB connection failed ",err)
})















// ( async () => {
//     try {

//         await mongoose.connect(`${ process.env.MONGODB_URI }/${ DB_NAME }`)
//         app.on("error",()=>{
//             console.log("error",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listning on Port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("error: ",error)
//         throw err
//     }
// })()