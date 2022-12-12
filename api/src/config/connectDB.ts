import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL || "mongodb://localhost/blood-donor");
        console.log("Database connection established successfully!")
    }catch(err){
        console.error(err)
    };
}

export default connectDB