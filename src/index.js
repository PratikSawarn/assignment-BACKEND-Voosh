import dotenv from "dotenv"
import connectDb from "./db/index.js";



dotenv.config({path:'./env'})






connectDb()















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