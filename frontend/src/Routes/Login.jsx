import React from 'react'
import style from '../CSS/Login.module.css'
import { FcGoogle } from "react-icons/fc";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className={` ${style.container}`}>

                <div className='mx-40 w-380 h-103  mt-24'>
                    <p className='font-openSans text-center font-semibold'>Create a new account</p>
                    <div className='flex h-48'>


                        <Button className='w-full' colorScheme='teal' size='sm'>
                        <FcGoogle className='h-32 w-23' />Sign Up with Google
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
