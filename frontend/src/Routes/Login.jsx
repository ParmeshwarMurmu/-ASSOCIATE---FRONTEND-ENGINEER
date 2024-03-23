import React from 'react'
import style from '../CSS/Login.module.css'
import { FcGoogle } from "react-icons/fc";
import { Button, ButtonGroup } from '@chakra-ui/react'
import logo from '../Assets/Logo.png'
import axios from 'axios';


const Login = () => {
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibXVybXVwYXJtZXNod2FyMDVAZ21haWwuY29tIiwiaWQiOjgsImZpcnN0TmFtZSI6IlBhcm1lc2h3YXIiLCJsYXN0TmFtZSI6Ik11cm11In0sImlhdCI6MTcxMTE3ODkxMywiZXhwIjoxNzQyNzE0OTEzfQ.P_fFmshplrW9nfPcUxC_olAv1nz0IauEnSpZNq4CCQk'

    // Function to handle loging through google
    const signUpUsingGoogleHandler = ()=>{
        // alert('google')
        axios.get(`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://localhost:3000/`)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    return (
        <div className={` bg-black`}>

            <div className={`h-64 flex justify-center pt-20 pb-20 pl-641 pr-641 ${style.logo}`}>
                <img src={logo} alt={'logo'} className='w-156 h-24' />
            </div>

            <div className={`h-663  flex justify-center items-center`}>

                <div className={`rounded-17 ${style.container}`}>

                    <div className='mx-40 w-380 h-103  mt-24 mb-48'>
                        <p className='font-openSans text-center font-semibold mb-24 text-white text-20 leading-31'>Create a new account</p>
                        <div className={`rounded-4 ${style.signUpwithGoogleBtn}`}>


                            <Button className='w-full h-48 px-8 pl-99 pr-99' variant={'none'} colorScheme='teal' onClick={signUpUsingGoogleHandler} >
                                <FcGoogle className='h-32 w-23 mr-12' /><p className=' text-signUpWithGoogle leading-26 font-normal text-16'>Sign Up with Google</p>
                            </Button>
                        </div>
                    </div>


                    <div className='mx-40 mb-40 '>
                        <div className={`rounded-4 w-195 h-48 ml-92 mr-92 ${style.creteAccountBtn}`}>
                            <Button variant={'none'} className='text-white pl-35 pr-35 pt-13 font-semibold w-full text-14 leading-21 font-openSans' colorScheme='teal' >
                                Create an Account
                            </Button>
                        </div>

                        <div className='mt-24'>
                            <div className='w-248 h-25 flex ml-66 mr-66'>

                                <p className='font-openSans font-normal text-16 leading-24 text-alreadyHaveAccount'>Already have an account?</p>
                                <p className='font-openSans font-normal text-16 leading-24 text-signIn ml-4'>Sign In</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={`bg-footerBgColor ${style.footerBorde} flex justify-center pt-6 pb-6 pl-610 pr-610`}>
                <p className='h-19 font-openSans font-normal text-12 leading-18 text-footerText'>© 2023 Reachinbox. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login
