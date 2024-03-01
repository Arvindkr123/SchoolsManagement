// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

let initialValues = {
    name: '',
    father_name: '',
    mobile_number: '',
    phone_number: '',
    present_address: '',
    permanent_address: '',
    dob: '',
    city: '',
    email: '',
    student_status: '',
    // Qualification
    education_qualification: '',
    professional_qualification: '',
    // course
    select_course: '',
    document_attached: '',
    select_software: '',
    // commision
    name_of_person_for_commision: '',
    commision_com_paid: '',
    commision_date: '',
    commision_voucher_no: '',
    // for office use onlu
    course_fees: '',
    reg_fees: '',
    down_payment: '',
    DOJ: '',
    slot_time: '',
    ReciptNo: '',
    no_of_installments: '',
    date: '', image: ''
}

const AdmissionForm = () => (
    <div className='row container '>
        <h1 className='col bg-secondary p-5 text-primary'>Admission Form</h1>
        <Formik
            initialValues={initialValues}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'email is required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                } else if (!values.name) {
                    errors.name = 'name is required!'
                } else if (!values.father_name) {
                    errors.father_name = 'father name is required!'
                } else if (!values.mobile_number) {
                    errors.mobile_number = 'mobile number is required!'
                } else if (!values.phone_number) {
                    errors.phone_number = 'phone number is required!'
                } else if (!values.present_address) {
                    errors.present_address = 'present address is required'
                } else if (!values.permanent_address) {
                    errors.permanent_address = 'permanent address is required!'
                } else if (!values.dob) {
                    errors.dob = 'Date of birth is required!'
                } else if (!values.city) {
                    errors.city = 'city is required!'
                } else if (!values.student_status) {
                    errors.student_status = 'student status is required!'
                } else if (!values.education_qualification) {
                    errors.education_qualification = 'education qualification is required!'
                } else if (!values.professional_qualification) {
                    errors.professional_qualification = 'professional qualification is required!'
                } else if (!values.select_course) {
                    errors.select_course = 'select course is required!'
                } else if (!values.document_attached) {
                    errors.document_attached = 'document attached is required!'
                } else if (!values.select_software) {
                    errors.select_software = 'select software is required!'
                } else if (!values.name_of_person_for_commision) {
                    errors.name_of_person_for_commision = 'name of person commision is required!'
                } else if (!values.commision_com_paid) {
                    errors.commision_com_paid = 'commision cod is required'
                } else if (!values.commision_date) {
                    errors.commision_date = 'commision date is required!'
                } else if (!values.commision_voucher_no) {
                    errors.commision_voucher_no = 'commission voucher number is required!'
                } else if (!values.course_fees) {
                    errors.course_fees = 'course fee is required!'
                } else if (!values.reg_fees) {
                    errors.reg_fees = 'registration fee is required!'
                } else if (!values.down_payment) {
                    errors.down_payment = 'down payment is required!'
                } else if (!values.DOJ) {
                    errors.DOJ = 'Date Of joining is required'
                } else if (!values.slot_time) {
                    errors.slot_time = 'slot time is required!'
                } else if (!values.ReciptNo) {
                    errors.ReciptNo = 'recipt number is required!'
                } else if (!values.no_of_installments) {
                    errors.no_of_installments = 'number of installement is required!'
                } else if (!values.date) {
                    errors.date = 'date is required!'
                } else if (!values.image) {
                    errors.image = 'image is required!'
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting, resetForm }) => (
                <Form className='form'>
                    <div className="row d-flex flex-column p-4 gap-3 ">
                        <Field className='form-control' type='file' name='image' />
                        <ErrorMessage name='image' component='div' />
                        <button className='btn btn-secondary' type="submit" disabled={isSubmitting}>
                            Upload Images
                        </button>
                    </div>
                    {/* ------------------------------- Student Information Start ----------------------------------------- */}

                    <div className="student-info border border-gray-500 row">
                        <h6 className='col bg-primary py-2 px-1'>Student Information</h6>
                        <div className="row m-5 p-3">
                            <div className="col-5 p-3">
                                <label className='form-label'>Name</label>
                                <Field type='text' name='name' placeholder='enter your name' className='form-control' />
                                <ErrorMessage name='name' component={'div'} />
                            </div>

                            <div className="col-5 p-3">
                                <label className='form-label'>Father Name</label>
                                <Field className='form-control' type='text' name='father_name' placeholder='enter your father name' />
                                <ErrorMessage name='father_name' component={'div'} />
                            </div>

                            <div className="col-5 p-3">
                                <label className='form-label'>Mobile Number</label>
                                <Field type='text' className='form-control' name='mobile_number' placeholder='enter your mobile number' />
                                <ErrorMessage name='mobile_number' component={'div'} />
                            </div>
                            <div className="col-5 p-3">
                                <label className='form-label'>Phone Number</label>
                                <Field type='text' className='form-control' name='phone_number' placeholder='enter your phone number' />
                                <ErrorMessage name='phone_number' component={'div'} />
                            </div>
                            <div className="col-5 p-3">
                                <label className='form-label'>Present Address</label>
                                <Field type='text' className='form-control' name='present_address' placeholder='enter your present address' />
                                <ErrorMessage name='present_address' component={'div'} />
                            </div>

                            <div className="col-5 p-3">
                                <label className='form-label'>Present Address</label>
                                <Field className='form-control' type='text' name='permanent_address' placeholder='enter your permanent  address' />
                                <ErrorMessage name='permanent_address' component={'div'} />
                            </div>

                            <div className="col-5 p-3">
                                <label className='form-label'>DOB</label>
                                <Field type='date' name='dob' className='form-control ' />
                                <ErrorMessage name='dob' component={'div'} />
                            </div>

                            <div className="col-5 p-3">
                                <label className='form-label'>City</label>
                                <Field type='text' name='city' className='form-control' placeholder='enter your city' />
                                <ErrorMessage name='city' component={'div'} />
                            </div>
                            <div className="col-5 p-3">
                                <label className='form-label'>Email</label>
                                <Field type='email' className='form-control' name='email' placeholder='enter your email' />
                                <ErrorMessage name='email' component={'div'} />
                            </div>
                            <div className="col-5 p-3">
                                <label className='form-label'>Select status</label>
                                <Field as='select' name='student_status' className='form-select'>
                                    <option value=''>select--</option>
                                    <option value='A'>A</option>
                                    <option value='B'>B</option>
                                </Field>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------- Student Information End----------------------------------------- */}

                    {/* --------------------------------Student Qualification Start-------------------------------------- */}
                    <div className="student-qualification border border-gray-500 row">
                        <h6 className='col bg-light-dark  py-2 px-2'>Qualification</h6>
                        <div className="row m-5 p-5">
                            <div className="col-5 p-3">
                                <label className='form-label'>Education Qualification</label>
                                <Field as='select' name='education_qualification' className='form-select'>
                                    <option value=''>-select-</option>
                                  
                                </Field>
                            </div>
                            <div className="col-5 p-3">
                                <label className='form-label'>Professional Qualification</label>
                                <Field as='select' name='professional_qualification' className='form-select'>
                                    <option value=''>-select-</option>
                                    
                                    {/* <option value='Aviation'>Aviation</option>
                                    <option value='B.A'>B.A</option>
                                    <option value='B.Arch'>B.Arch</option>
                                    <option value='B.B.A'>B.B.A</option>
                                    <option value='B.Com'>B.Com</option>
                                    <option value='B.E/B.Tech'>B.E/B.Tech</option>
                                    <option value='BHM'>BHM</option>
                                    <option value='BL/LLB'>BL/LLB</option> */}
                                </Field>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------Student Qualification End-------------------------------------- */}

                    {/* --------------------------------Student Course Start-------------------------------------- */}
                    <div className="student-qualification border border-gray-500 row">
                        <h6 className='col bg-light-dark  py-2 px-2'>Course</h6>
                        <div className="row m-5 p-5">
                            <div className="col-5 p-3">
                                <label className='form-label'>Select Course</label>
                                <Field as='select' name='select_course' className='form-select'>
                                    <option value=''>Select Software</option>

                                </Field>
                            </div>
                            <div className="col-5 p-3">
                                <label className='form-label'>Document Attached</label>
                                <Field as='select' name='document_attached' className='form-select'>
                                    <option value=''>-Select-</option>
                                    
                                </Field>
                            </div>
                            <div className="col-5 p-3">
                                <label className='form-label'>Select Software</label>
                                <Field as='select' name='select_software' className='form-select'>
                                    <option value=''>-Select-</option>
                                    
                                </Field>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------Student Course End-------------------------------------- */}

                    {/* --------------Commision Start---------------- */}
                    <div className="commision border broder-gray-500 row">
                        <h6 className="col bg-light-dark py-2 px-2">
                            Commision
                        </h6>
                        <div className="row m-5 p-5">
                            <div className="col-5 p-3">
                                <label htmlFor="name_of_person_for_commision">Name of Person for Commision</label>
                                <Field type='text' name='name_of_person_for_commision' className='form-control' />
                                <ErrorMessage name='name_of_person_for_commision' component={'div'} />
                            </div>
                            <div className="col-5 p-3">
                                <label htmlFor="commision_com_paid">Commision Com. Paid </label>
                                <Field type='text' name='commision_com_paid' className='form-control' />
                                <ErrorMessage name='commision_com_paid' component={'div'} />
                            </div>
                        </div>
                    </div>
                    {/* --------------Commision End---------------- */}

                    <div className="border border-gray-500 row">
                        <div className="p-4">
                            <button type="submit" className='btn btn-primary m-4' disabled={isSubmitting}>
                                Submit
                            </button>
                            <button type="button" className='btn btn-primary' onClick={() => resetForm()}>
                                Reset
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default AdmissionForm;