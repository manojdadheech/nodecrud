import studentModel from "../model/student.js";

class StudentMethod {
    static async getStudentData(req, res) {
        const data= await studentModel.find();
        console.log(data);
        // res.status(201).json({
        //     status: 'success',
        //     length:data.length,
        //     data: data
        // })
        res.render("index",{data}); // Assuming you have a view engine set up
    }
    static async StudentData(req, res) {
        const student = req.body;
        console.log(student);
        const stu =  new studentModel(student);
       await stu.save();
        // stu.save((err)=> {
        //     if (err){
        //         return res.status(400).json({
        //             error: err
        //         });
        //     }
        //     res.redirect('/');
        // });
        
        res.redirect("/")// Assuming you have a view engine set up
    }






    static async Studentedit(req, res) {
        console.log(req.params.id);
        const data= await studentModel.findById(req.params.id);
        res.render("edit",{data}); // Assuming you have a view engine set up
    }
    static async Studentupdate(req, res) {
        console.log(req.params.id);
        const data= await studentModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/')
         // Assuming you have a view engine set up
    }




    static async Studentdelete(req, res) {
        const id=req.params.id
        console.log(id);
       await studentModel.findByIdAndDelete(id)
    //    studentModel.remove({_id : id}, (err)=>{
    //        if(!err){
    //            res.send('Deleted Successfully')
    //        }else{
    //            console.log(err)
    //        }
    //    });
        res.redirect("/") // Assuming you have a view engine set up
    }
}
export default StudentMethod; // Exporting the class for use in other modules
