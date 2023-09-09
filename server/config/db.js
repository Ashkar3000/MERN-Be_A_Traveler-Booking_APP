import mongoose from "mongoose"

const connect = async () =>{
    try {
        await mongoose.connect(process.env.LOCALMONGO)
        console.log("Database Connected")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected" , ()=>{
    console.log("MongoDB disconnected!")
})

mongoose.connection.on("connected" , ()=>{
    console.log("MongoDB Connected!")
})

export default connect;