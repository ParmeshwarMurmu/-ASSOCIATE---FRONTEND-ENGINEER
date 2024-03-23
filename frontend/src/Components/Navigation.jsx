import React from 'react'
import { IconButton, Flex, Image } from '@chakra-ui/react';
import darkCircle from '../Assets/DrakModeCircle.png'
import lightMode from '../Assets/LightMode.png';
import style from '../CSS/Home.module.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navigation = () => {
    return (
        <div className='flex'>
            <p className='w-127 h-22 font-openSans text-16 leading-22 text-white font-bold'>Onebox</p>
            <div className='w-210 h-24 ml-1154  mr-19 flex items-center'>
                <IconButton className={`rounded-80 w-51 h-24 pt-3 pr-5 pl-5 pb-3 ${style.theme}`}
                variant={'none'}
                    // aria-label="Search database"
                    icon={
                        <Flex>
                            <Image src={darkCircle} alt="dark mode" mr={2} />
                            <Image src={lightMode} alt="light mode" />
                        </Flex>
                    }
                  
                />

                <div className='flex ml-22 mt-1'>
                    <p className='text-14 text-white leading-21 font-openSans w-113 h-22 font-semibold'>Tim’s Workspace</p>
                    <div className='w-16 h-16 ml-8 mt-3 mb-3'>
                    <MdOutlineKeyboardArrowDown className='text-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
