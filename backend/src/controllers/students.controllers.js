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
      res.status(404).json({ success: false, message: "Student not found!" });
      return; // Added return to exit the function if student is not found
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
      receipt_no, // Corrected the variable name
      no_of_installments,
      date,
    } = req.body;

    // Use || for conditional updates
    student.name = name || student.name;
    student.father_name = father_name || student.father_name;
    student.mobile_number = mobile_number || student.mobile_number;
    student.phone_number = phone_number || student.phone_number;
    student.present_address = present_address || student.present_address;
    student.permanent_address = permanent_address || student.permanent_address;
    student.date_of_birth = date_of_birth || student.date_of_birth;
    student.city = city || student.city;
    student.email = email || student.email;
    student.student_status = student_status || student.student_status;
    student.education_qualification =
      education_qualification || student.education_qualification;
    student.professional_qualification =
      professional_qualification || student.professional_qualification;
    student.select_course = select_course || student.select_course;
    student.document_attached = document_attached || student.document_attached;
    student.select_software = select_software || student.select_software;
    student.name_of_person_for_commision =
      name_of_person_for_commision || student.name_of_person_for_commision;
    student.commision_paid = commision_paid || student.commision_paid;
    student.commision_date = commision_date || student.commision_date;
    student.commision_voucher_number =
      commision_voucher_number || student.commision_voucher_number;
    student.course_fees = course_fees || student.course_fees;
    student.register_fee = register_fee || student.register_fee;
    student.down_payment = down_payment || student.down_payment;
    student.date_of_joining = date_of_joining || student.date_of_joining;
    student.slot_time = slot_time || student.slot_time;
    student.receipt_no = receipt_no || student.receipt_no;
    student.no_of_installments =
      no_of_installments || student.no_of_installments;
    student.date = date || student.date;

    let updatedStudent = await student.save();

    res.status(200).json(updatedStudent);
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
