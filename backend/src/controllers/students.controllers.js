import asyncHandler from "../middlewares/asyncHandler.js";
import admissionFormModel from "../models/addmission_form.models.js";

export const getAllStudentsController = asyncHandler(async (req, res, next) => {
  try {
    const users = await admissionFormModel.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export const updateStudentController = asyncHandler(async (req, res, next) => {
  try {
    const student = await admissionFormModel.findOne({ _id: req.params.id });
    if (!student) {
      res.status(404).json({ success: false, message: "Student not found !" });
    }
    const {
      name,
      father_name,
      mobile_number,
      phone_number,
      present_address,
      permanent_address,
      date_of_birth,
      city,
      email,
      student_status,
      education_qualification,
      professional_qualification,
      select_course,
      document_attached,
      select_software,
      name_of_person_for_commision,
      commision_paid,
      commision_date,
      commision_voucher_number,
      course_fees,
      register_fee,
      down_payment,
      date_of_joining,
      slot_time,
      recipt_no,
      no_of_installments,
      date,
    } = req.body;
    // switch (true) {
    //   case !name:
    //     res.status(400);
    //     throw new Error("Please provide name field!");
    //     return;
    //   case !father_name:
    //     res.status(400);
    //     throw new Error("Please provide father Name field!");
    //     return;
    //   case !mobile_number:
    //     res.status(400);
    //     throw new Error("Please provide mobile number field!");
    //     return;
    //   case !phone_number:
    //     res.status(400);
    //     throw new Error("Please provide phone number field!");
    //     return;
    //   case !present_address:
    //     res.status(400);
    //     throw new Error("Please provide present address field!");
    //     return;
    //   case !permanent_address:
    //     res.status(400);
    //     throw new Error("Please provide permanent address field!");
    //     return;
    //   case !date_of_birth:
    //     res.status(400);
    //     throw new Error("Please provide date of birth field!");
    //     return;
    //   case !city:
    //     res.status(400);
    //     throw new Error("Please provide city field!");
    //     return;
    //   case !email:
    //     res.status(400);
    //     throw new Error("Please provide email field!");
    //     return;
    //   case !student_status:
    //     res.status(400);
    //     throw new Error("Please provide student status field!");
    //     return;
    //   case !education_qualification:
    //     res.status(400);
    //     throw new Error("Please provide education qualification field!");
    //     return;
    //   case !professional_qualification:
    //     res.status(400);
    //     throw new Error("Please provide professional qualification field!");
    //     return;
    //   case !select_course:
    //     res.status(400);
    //     throw new Error("Please provide select course field!");
    //     return;
    //   case !document_attached:
    //     res.status(400);
    //     throw new Error("Please provide document attached  field!");
    //     return;
    //   case !select_software:
    //     res.status(400);
    //     throw new Error("Please provide select software field!");
    //     return;
    //   case !name_of_person_for_commision:
    //     res.status(400);
    //     throw new Error("Please provide name of person for commision field!");
    //     return;
    //   case !commision_paid:
    //     res.status(400);
    //     throw new Error("Please provide commision paid field!");
    //     return;
    //   case !commision_date:
    //     res.status(400);
    //     throw new Error("Please provide commision date field!");
    //     return;
    //   case !commision_voucher_number:
    //     res.status(400);
    //     throw new Error("Please provide commision voucher number field!");
    //     return;
    //   case !course_fees:
    //     res.status(400);
    //     throw new Error("Please provide course fees field!");
    //     return;
    //   case !register_fee:
    //     res.status(400);
    //     throw new Error("Please provide register fees field!");
    //     return;
    //   case !down_payment:
    //     res.status(400);
    //     throw new Error("Please provide down payment field!");
    //     return;
    //   case !date_of_joining:
    //     res.status(400);
    //     throw new Error("Please provide date of joining field!");
    //     return;
    //   case !slot_time:
    //     res.status(400);
    //     throw new Error("Please provide slot time field!");
    //     return;
    //   case !recipt_no:
    //     res.status(400);
    //     throw new Error("Please provide recipt no field!");
    //     return;
    //   case !no_of_installments:
    //     res.status(400);
    //     throw new Error("Please provide number of installements  field!");
    //     return;
    //   case !date:
    //     res.status(400);
    //     throw new Error("Please provide date  field!");
    //     return;

    //   default:
    //     break;
    // }

    student.name = name | student.name;
    student.father_name = father_name | student.father_name;
    student.mobile_number = mobile_number | student.mobile_number;
    student.phone_number = phone_number | student.phone_number;
    student.present_address = present_address | student.present_address;
    student.permanent_address = permanent_address | student.permanent_address;
    student.date_of_birth = date_of_birth | student.date_of_birth;
    student.city = city | student.city;
    student.email = email | student.email;
    student.student_status = student_status | student.student_status;
    student.education_qualification =
      education_qualification | student.education_qualification;
    student.professional_qualification =
      professional_qualification | student.professional_qualification;
    student.select_course = select_course | student.select_course;
    student.document_attached = document_attached | student.document_attached;
    student.select_software = select_software | student.select_software;
    student.name_of_person_for_commision =
      name_of_person_for_commision | student.name_of_person_for_commision;
    student.commision_paid = commision_paid | student.commision_paid;
    student.commision_date = commision_date | student.commision_date;
    student.commision_voucher_number =
      commision_voucher_number | student.commision_voucher_number;
    student.course_fees = course_fees | student.course_fees;
    student.register_fee = register_fee | student.register_fee;
    student.down_payment = down_payment | student.down_payment;
    student.date_of_joining = date_of_joining | student.date_of_joining;
    student.slot_time = slot_time | student.slot_time;
    student.recipt_no = recipt_no | student.recipt_no;
    student.no_of_installments =
      no_of_installments | student.no_of_installments;
    student.date = date | student.date;
    await student.save();

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export const deleteStudentController = asyncHandler(async (req, res, next) => {
  try {
    // find the student
    const student = await admissionFormModel.findById(req.params.id);
    await student.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Student deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
