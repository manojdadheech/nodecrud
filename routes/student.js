import express from "express";
import StudentMethod from "../controllers/studentcontroller.js";

const route= express.Router();

route.get("/", StudentMethod.getStudentData )
route.post("/", StudentMethod.StudentData )
route.get("/edit/:id", StudentMethod.Studentedit )
route.post("/edit/:id", StudentMethod.Studentupdate )
route.get("/delete/:id", StudentMethod.Studentdelete )

export default route;