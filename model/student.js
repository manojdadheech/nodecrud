import mongoose from "mongoose";

const studentSchema=  new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname:{type :String ,required :true},
    email:{type :String ,required :true},
    mobile:{type :Number ,required :true}
   
});

const studentModel= mongoose.model("Student",studentSchema);
export  default studentModel;

// this method is used to create a token for the user after login   
