import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { AddMissionFormInterface, addMissionFormInitialValues as initialValues } from '../modules/accounts/components/settings/SettingsModel'
import { useAdmissionContext } from '../modules/auth/core/Addmission'

const addmissionFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    father_name: Yup.string().required('Father Name is required!'),
    mobile_number: Yup.string().required('Mobile Number is required!'),
    phone_number: Yup.string().required('Phone Number is required!'),
    present_address: Yup.string().required('Present Address is required!'),
    permanent_address: Yup.string().required('Permanent Address is required!'),
    date_of_birth: Yup.string().required('Date of birth is required!'),
    city: Yup.string().required('city is required!'),
    email: Yup.string().required('email is required!'),
    student_status: Yup.string().required('Student status is required!'),
    education_qualification: Yup.string().required('Education qualification is required!'),
    professional_qualification: Yup.string().required('Professional Qualification is required!'),
    select_course: Yup.string().required('select course is required!'),
    document_attached: Yup.string().required('document attached is required!'),
    select_software: Yup.string().required('select software  is required!'),
    name_of_person_for_commision: Yup.string().required('Name of person for commision is required!'),
    commision_paid: Yup.string().required('commision paid is required!'),
    commision_date: Yup.string().required('Commision date is required!'),
    commision_voucher_number: Yup.string().required('Commision voucher number is required!'),
    course_fees: Yup.string().required('Course fees is required!'),
    register_fee: Yup.string().required('Registeration fees is required!'),
    down_payment: Yup.string().required('Down Payment is required!'),
    date_of_joining: Yup.string().required('Date of joining is required!'),
    slot_time: Yup.string().required('Slot time is required!'),
    recipt_no: Yup.string().required('Recipt number is required!'),
    no_of_installments: Yup.string().required('Number of installments  is required!'),
    date: Yup.string().required('Date is required!')
})




const AddMissionForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const context = useAdmissionContext()
    const formik = useFormik<AddMissionFormInterface>({
        initialValues,
        validationSchema: addmissionFormSchema,
        onSubmit: async (values) => {
            setLoading(true)
            context.mutate(values)
            // console.log(values);
            setLoading(false)
            // mutation.mutate(values)
        },
    })

    return (
        <div className='card mb-5 mb-xl-10'>
            <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_account_profile_details'
                aria-expanded='true'
                aria-controls='kt_account_profile_details'
            >
                <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>Student Information</h3>
                </div>
            </div>

            <div id='kt_account_profile_details' className='collapse show'>
                <form onSubmit={formik.handleSubmit} noValidate className='form'>
                    <div className='card-body border-top p-9'>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Name</label>

                            <div className='col-lg-8'>
                                <div className='row'>
                                    <div className='col-lg-6 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Name'
                                            {...formik.getFieldProps('name')}
                                        />
                                        {formik.touched.name && formik.errors.name && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>{formik.errors?.name}</div>
                                            </div>
                                        )}
                                    </div>

                                    <div className='col-lg-6 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid'
                                            placeholder='Father Name'
                                            {...formik.getFieldProps('father_name')}
                                        />
                                        {formik.touched.father_name && formik.errors.father_name && (
                                            <div className='fv-plugins-message-container'>
                                                <div className='fv-help-block'>{formik.errors.father_name}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Mobile Number</label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Mobile Number'
                                    {...formik.getFieldProps('mobile_number')}
                                />
                                {formik.touched.mobile_number && formik.errors.mobile_number && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.mobile_number}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Phone Number</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='tel'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Phone number'
                                    {...formik.getFieldProps('phone_number')}
                                />
                                {formik.touched.phone_number && formik.errors.phone_number && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.phone_number}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Present Address</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Present Address'
                                    {...formik.getFieldProps('present_address')}
                                />
                                {formik.touched.present_address && formik.errors.present_address && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.present_address}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Permanent Address</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Permanent Address'
                                    {...formik.getFieldProps('permanent_address')}
                                />
                                {formik.touched.permanent_address && formik.errors.permanent_address && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.permanent_address}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>City</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='City'
                                    {...formik.getFieldProps('city')}
                                />
                                {formik.touched.city && formik.errors.city && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.city}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Email</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='email'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Email'
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.email}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>DOB</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='date'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='DOB'
                                    {...formik.getFieldProps('permanent_address')}
                                />
                                {formik.touched.date_of_birth && formik.errors.date_of_birth && (
                                    <div className='fv-plugins-message-container'>
                                        {/* <div className='fv-help-block'>{formik.errors.date_of_birth}</div> */}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Student Status</label>

                            <div className='col-lg-8 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg'
                                    {...formik.getFieldProps('student_status')}
                                >

                                    <option value=''>select--</option>
                                    <option value='A'>A</option>
                                    <option value='B'>B</option>
                                </select>
                                {formik.touched.student_status && formik.errors.student_status && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.student_status}</div>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* -----------------QUALIFICATION START HERE ------------------ */}

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Education Qualification
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg'
                                    {...formik.getFieldProps('education_qualification')}
                                >

                                    <option value=''>-select-</option>
                                    {/* <option value='10th'>10th</option> */}
                                    <option value='10th'>10th</option>
                                    <option value='10+2'>10+2</option>
                                </select>
                                {formik.touched.education_qualification && formik.errors.education_qualification && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.education_qualification}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Professional Qualification
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg'
                                    {...formik.getFieldProps('professional_qualification')}
                                >

                                    <option value=''>-select-</option>
                                    {['None', 'Aviation', 'B.A', 'B.Arch', 'B.B.A', 'B.Com', 'B.E/B.Tech', 'BHM', 'BL/LLB', 'B.Pharm',
                                        'B.Sc',
                                        'BSW',
                                        'CA',
                                        'CA Inter',
                                        'Class 12',
                                        'CS',
                                        'Diploma',
                                        'DSW',
                                        'ICWA',
                                        'ICWA Inter',
                                        'MA',
                                        'M.Arch',
                                        'M.Arch',
                                        'MBA',
                                        'MBBS',
                                        'MCA',
                                        'M.Com',
                                        'MD/MS',
                                        'M.Ed',
                                        'M.E/M.Tech/MS',
                                        'ML/LLM',
                                        'M.Pharma',
                                        'MPhil',
                                        'M.Sc',
                                        'MSW',
                                        'PGDCA',
                                        'PG Diploma',
                                        'PGDM',
                                        'Phd',
                                        'other',].map((c, i) => (
                                            <option key={i} value={c}>{c}</option>
                                        ))}
                                </select>
                                {formik.touched.professional_qualification && formik.errors.professional_qualification && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.professional_qualification}</div>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* ---------------------------QUALIFICATION END HERE ----------------------- */}
                        {/* ---------------------------COURSE START HERE ----------------------- */}

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Select Course
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg'
                                    {...formik.getFieldProps('select_course')}
                                >
                                    <option value=''>-select-</option>
                                    {
                                        ['Diploma in 3D Animation',
                                            'Diploma in Visual Effects',
                                            'Bsc. in Animation Film Making',
                                            'Bsc. in Fashion Designing',
                                            'Fashion Designing CAD Diploma (1 Year)',
                                            'Certificate in Interior Designing',
                                            'Web Designing 2.0 (10 Month)',
                                            'Graphic Designing',
                                            'Fashion Designing CAD (3 Month)',
                                            'Fashion Designing CAD (6 Month)',
                                            'Web Designing 3.0 (1 Year)',
                                            'Web Designing (6 Month)',
                                            'Audio & Video Editing ',
                                            'Photoshop and Illustrator',
                                            'Wilcom',
                                            'Basic Computer Course',
                                            'Fashion Designing CAD Diploma (18 Monhs)',
                                            'Digital Marketing (6 Months)',
                                            'Digital Marketing (3 Monhs)',
                                            'Advance Program in Animation (Reliance)',
                                            'Triple Program in Animation (Reliance)',
                                            'Advance Program in VFX (Reliance)',
                                            'Triple Program in VFX (Reliance)',
                                            'Program in VFX Film Making (1Year)',
                                            'Motion Graphics',
                                            'IELTS',
                                            'PTE',
                                            'Spoken English',
                                            'Spoken English',
                                            'IELTS Renewal',
                                            'Internship',
                                            'Web Designing',
                                            'Web Designing plus Graphic Course',
                                            'Web Designing plus 4months Graphic Course',
                                            'Graphic designing (2Months )',
                                            'web desiging and php 9 months',
                                            'Digital Marketing [1.5 months ]',
                                            'Australia interview preparation',].map((c, i) => (
                                                <option key={i} value={c}>{c}</option>
                                            ))
                                    }
                                </select>
                                {formik.touched.select_course && formik.errors.select_course && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.select_course}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Document Attached
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg'
                                    {...formik.getFieldProps('document_attached')}
                                >
                                    <option value=''>-select-</option>
                                    {[
                                        'Voter card',
                                        'Driving Liecence',
                                        'Pan card',
                                        'Matric Certificate',
                                        'Ration card',
                                        'Educational docs',
                                        'Marriage Certificate',
                                        'Passport',
                                    ].map((c, i) => (
                                        <option key={i} value={c}>{c}</option>
                                    ))}
                                </select>
                                {formik.touched.document_attached && formik.errors.document_attached && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.document_attached}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Select Software
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg'
                                    {...formik.getFieldProps('select_software')}
                                >

                                    <option value=''>-select-</option>
                                    {[
                                        'Maya',
                                        '3ds Max',
                                        'Adobe Photoshop',
                                        'Z-Brush',
                                        'After Effect',
                                        'Adobe Premier  ',
                                        'Fusion',
                                        'Sound Forge',
                                        'Revit',
                                        'Auto CAD',
                                        'Wordpress',
                                        'photoshop nd illustrator',
                                        'solid works and auto cad',
                                        'Digital Marketing (1.5 months)',

                                    ].map((c, i) => (
                                        <option key={i} value={c}>{c}</option>
                                    ))}

                                </select>
                                {formik.touched.select_software && formik.errors.select_software && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.select_software}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ---------------------------COURSE END HERE ----------------------- */}
                        {/* ---------------------------Commision Start HERE ----------------------- */}


                        {/* ---------------------------Commision End HERE ----------------------- */}

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Name of Person for Commision</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Name of Person For Commision'
                                    {...formik.getFieldProps('name_of_person_for_commision')}
                                />
                                {formik.touched.name_of_person_for_commision && formik.errors.name_of_person_for_commision && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.name_of_person_for_commision}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Commision Com. Paid</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Commision Com. Paid'
                                    {...formik.getFieldProps('commision_paid')}
                                />
                                {formik.touched.commision_paid && formik.errors.commision_paid && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.commision_paid}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Commision Date</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='date'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Commision Date'
                                    {...formik.getFieldProps('commision_date')}
                                />
                                {formik.touched.commision_date && formik.errors.commision_date && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.commision_date}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Commision Voucher No</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Commision Voucher No'
                                    {...formik.getFieldProps('commision_voucher_number')}
                                />
                                {formik.touched.commision_voucher_number && formik.errors.commision_voucher_number && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.commision_voucher_number}</div>
                                    </div>
                                )}
                            </div>
                        </div>



                        {/* ---------------------------FOR OFFICE USE ONLY START HERE ----------------------- */}

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Course Fees</span>
                                <p>(including 14% service Tax)</p>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Course Fees'
                                    {...formik.getFieldProps('course_fees')}
                                />
                                {formik.touched.course_fees && formik.errors.course_fees && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.course_fees}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Regis Fees</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Regis Fees'
                                    {...formik.getFieldProps('register_fee')}
                                />
                                {formik.touched.register_fee && formik.errors.register_fee && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.register_fee}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/*=================================== Down Payement start ======================= */}
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Down Payment</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Down Payment.'
                                    {...formik.getFieldProps('down_payment')}
                                />
                                {formik.touched.down_payment && formik.errors.down_payment && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.down_payment}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/*=================================== Down Payement end ======================= */}

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>D.O.J</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='date'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='D.O.J'
                                    {...formik.getFieldProps('date_of_joining')}
                                />
                                {formik.touched.date_of_joining && formik.errors.date_of_joining && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.date_of_joining}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Slot Time</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='time'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Slot Time'
                                    {...formik.getFieldProps('slot_time')}
                                />
                                {formik.touched.slot_time && formik.errors.slot_time && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.slot_time}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Recipt No</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Recipt No'
                                    {...formik.getFieldProps('recipt_no')}
                                />
                                {formik.touched.recipt_no && formik.errors.recipt_no && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.recipt_no}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label required fw-bold fs-6'>No. of Installments</label>

                            <div className='col-lg-8 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg'
                                    {...formik.getFieldProps('no_of_installments')}
                                >
                                    <option value=''>-select-</option>
                                    {Array.from({ length: 60 }, (_, index) => (
                                        <option key={index} value={index + 1}>{index + 1}</option>
                                    ))}
                                </select>
                                {formik.touched.no_of_installments && formik.errors.no_of_installments && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.no_of_installments}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>
                                <span className='required'>Date</span>
                            </label>

                            <div className='col-lg-8 fv-row'>
                                <input
                                    type='date'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='Recipt No'
                                    {...formik.getFieldProps('date')}
                                />
                                {formik.touched.date && formik.errors.date && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.date}</div>
                                    </div>
                                )}
                            </div>
                        </div>



                        {/* ---------------------------FOR OFFICE USE ONLY END HERE ----------------------- */}
                    </div>

                    <div className='card-footer d-flex justify-content-end py-6 px-9'>
                        <button type='submit' className='btn btn-primary' disabled={context.isLoading}>
                            {!context.isLoading && 'Submit'}
                            {context.loading && (
                                <span className='indicator-progress' style={{ display: 'block' }}>
                                    Please wait...{' '}
                                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMissionForm