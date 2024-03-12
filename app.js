import express from "express";
import Dbconnect from "./Db/dbconnect.js";
import stu from "./routes/student.js";
const app = express();

app.set( 'view engine', 'ejs' );
Dbconnect()
app.use(express.urlencoded({ extended: true })); // middleware for parsing url encoded bodies

app.use('/',stu);



app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});