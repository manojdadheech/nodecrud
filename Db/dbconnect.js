import mongoose  from "mongoose";

const option={
    dbName:'school'
}

const Dbconnect= async()=>{
    try {
        await  mongoose.connect("mongodb+srv://manojdadheechgoldengate:vLPsC3YI96oYgOOZ@cluster0.w6vfda3.mongodb.net/",option);
        console.log('Databas connected.....');

        
    } catch (error) {
        console.log("Error in Database Connection"+ error);
        
    }
}

export default  Dbconnect;