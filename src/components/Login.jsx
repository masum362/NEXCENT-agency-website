import React, { useState } from 'react'
import { Label, TextInput } from 'flowbite-react';
import signUpImg from '../assets/undraw_Sign_up_n6im.png'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    }
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required').min('8')
        }),
        onSubmit: values => {

            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className='w-full  flex flex-col md:flex-row gap-4 items-center justify-center  mx-auto' >

            <div className='w-full md:w-1/2  flex items-center justify-center md:items-start md:justify-start  '>
                <img src={signUpImg} alt="Login-Image" className='w-full ' />
            </div>




            <div className='w-full md:w-1/2 items-center md:items-start justify-center md:justify-start px-3 mx-auto '>
                <div className='flex items-center justify-center flex-col sm:px-3  drop-shadow-sm border-2 lg:w-2/3 rounded-lg gap-4 py-4 mx-auto'>
                    <h1 className='font-semibold text-5xl text-neutralDGray '>Login</h1>
                    <form className="flex items-center justify-center flex-col gap-4  px-3 py-5 w-full" onSubmit={formik.handleSubmit}>
                        <div className='w-72'>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" className='text-neutralDGray' />
                            </div>
                            <input id="email1" type="email" placeholder="name@nexcent.com" required className='w-full rounded-lg border-slate-500 focus:border-branchPrimary' name='email' value={formik.values.email} onChange={formik.handleChange} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-800'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className='w-72 relative'>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Password" className='w-full text-neutralDGray' />
                            </div>
                            <input id="password1" type={isPasswordVisible ? "text" : "password"} placeholder="********" required className='w-full rounded-lg border-slate-500 focus:border-branchPrimary' name='password' value={formik.values.password} onChange={formik.handleChange} />
                            {formik.touched.password && formik.errors.password ? (
                                <div className='text-red-800'>{formik.errors.password}</div>
                            ) : null}
                            <button
                                className="absolute top-8 right-0  flex items-center justify-center px-4 text-slate-200 bg-neutralDGray py-[11px] rounded-r-lg"
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </button>

                        </div>


                        <div className='w-72 mt-2 '>
                            <button type='submit' className='bg-branchPrimary text-white hover:bg-neutralDGray py-3 rounded-lg px-4 transition-all duration-300 w-full '>Submit</button>
                        </div>

                    </form>
                    <div className='pb-4'>
                        <p className='text-neutralDGray'>Don't Have An Account? <Link to={'/register'} className='text-branchPrimary font-semibold cursor-pointer'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Login