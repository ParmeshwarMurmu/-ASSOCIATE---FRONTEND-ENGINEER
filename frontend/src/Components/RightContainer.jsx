import React from 'react'
import sendEmail from '../Assets/Send email.png';
import sendLogo from '../Assets/send.png';
import yellowInbox from '../Assets/yellow inbox.png';
import style from '../CSS/AllInbox.module.css'
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

const RightContainer = () => {

    const { theme } = useSelector((store) => {
        return {
            theme: store.ThemeReducer.theme,
        }
    }, shallowEqual)
    

    return (
        <div>

            {/* Lead Details */}
            <div className={` ${theme === 'darkTheme' ? 'bg-searchContainerBackgroundColor' : 'bg-leadDeailsthemeBackgroundColor'} w-268 h-36 rounded-8 pt-8 pb-8 pl-12 mt-15 ml-5 mr-5`}>
                <p className={`font-inter font-semibold text-14 leading-20 ${theme === 'darkTheme' ? 'text-white' : 'text-leadDetailsThemeTextColor'}`}>Lead Details</p>

            </div>

            {/* Details */}

            <div className='mt-68 ml-7 mr-7 pt-8 pl-12 pr-14 pb-27'>

                <div className={`flex justify-between`}>
                    <p className={`font-inter font-normal text-12 leading-14  ${theme === 'darkTheme' ? 'text-white' : 'text-newProductLaunchThemeTextColor'}`}>Name</p>
                    <p className={`font-inter font-normal text-14 leading-16  ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-black'}`}>Oriando</p>
                </div>


                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 ${theme === 'darkTheme' ? 'text-white' : 'text-newProductLaunchThemeTextColor'}`}>Email Id</p>
                    <p className={`font-inter font-normal text-14 leading-16 ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-black'}`}>Oriando@gmail.com</p>
                </div>

                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 ${theme === 'darkTheme' ? 'text-white' : 'text-newProductLaunchThemeTextColor'}`}>Contact No</p>
                    <p className={`font-inter font-normal text-14 leading-16 ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-black'} `}>+54-9062827869</p>
                </div>


                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 ${theme === 'darkTheme' ? 'text-white' : 'text-newProductLaunchThemeTextColor'}`}>Linkedin</p>
                    <p className={`font-inter font-normal text-14 leading-16 ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-black'} `}>Lead Details</p>
                </div>

                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 ${theme === 'darkTheme' ? 'text-white' : 'text-newProductLaunchThemeTextColor'}`}>Company Name</p>
                    <p className={`font-inter font-normal text-14 leading-16 ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-black'}`}>Reachinbox</p>
                </div>



            </div>

            {/* Activities */}

            <div className={` ${theme === 'darkTheme' ? 'bg-searchContainerBackgroundColor' : 'bg-leadDeailsthemeBackgroundColor'}  rounded-8 pt-8 pb-8 pl-12 pr-12 mt-16`}>
                <p className={`font-inter text-14 leading-20 ${theme === 'darkTheme' ? 'text-white' : 'text-leadDetailsThemeTextColor'}  font-semibold`}>Activities</p>
            </div>

            {/* Campaign Name */}

            <div className={`mt-16 ml-10 mr-10 pt-13 pl-30`}>
                <p className={`mb-20 font-openSans font-semibold  text-15 leading-21 ${theme === 'darkTheme' ? 'text-white' : 'text-replyMessageBodyThemeTextColor'} `}>Campaign Name</p>

                <div className={`mb-16 flex`}>

                    <p className={`font-openSans font-semibold text-12 leading ${theme === 'darkTheme' ? 'text-white' : 'text-leadDetailsThemeTextColor'} pr-8 ${style.stepsBorder}`}> <span className={`font-semibold pr-1`}>3</span>Steps</p>
                    <p className={`font-openSans font-semibold text-12 leading  ml-8 ${theme === 'darkTheme' ? 'text-white' : 'text-leadDetailsThemeTextColor'}`}> <span className={`font-normal `}>5</span>Days in Sequence</p>
                </div>

                {/* setUp Emails */}
                <div className={``}>

                    <div className={`mb-32 flex`}>

                    
                    <div className={`p-7 rounded-47 mt-9 mb-9  ${theme === 'darkTheme' ? 'bg-searchContainerBackgroundColor' : 'bg-searchContainerThemeBackgroundColor'}`}> 
                        <img src={sendEmail} alt='sendEmail' />
                    </div>

                    <div className={`ml-16 `}>
                        <p className={`font-openSans text-13 leading-17 ${theme === 'darkTheme' ? 'text-white' : 'text-replyMessageBodyThemeTextColor'} font-semibold`}>Step 1: Email</p>
                        <div className={`flex justify-center `}>
                            <img src={sendLogo} alt={'send logo'} />
                            <p className={`p-1 font-inter text-10 leading-23 ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-leadDetailsThemeTextColor'}  font-normal`}>
                                    Sent
                                <span className={`pl-1`}>

                                3rd, Feb
                                </span>
                            </p>
                        </div>
                    </div>

                    </div>

                    {/* 888 */}

                    <div className={`mb-32 flex `}>

                    
                    <div className={`p-7 rounded-47 mt-9 mb-9  ${theme === 'darkTheme' ? 'bg-searchContainerBackgroundColor' : 'bg-searchContainerThemeBackgroundColor'}`}> 
                        <img src={sendEmail} alt='sendEmail' />
                    </div>

                    <div className={`ml-16 `}>
                        <p className={`font-openSans text-13 leading-17 ${theme === 'darkTheme' ? 'text-white' : 'text-replyMessageBodyThemeTextColor'} font-semibold`}>Step 2: Email</p>
                        <div className={`flex justify-center mt-4  `}>
                            <img src={yellowInbox} alt={'yellow inbox'} className={`w-16 h-16 mt-1`} />
                            <p className={`p-1 font-inter text-10 leading-23 ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-leadDetailsThemeTextColor'} font-normal`}>
                                Opened
                                <span className={`pl-1`}>

                                5th, Feb
                                </span>
                            </p>
                        </div>
                    </div>

                    </div>
                     

                     {/* 00 */}


                     <div className={`mb-32 flex`}>

                    
                    <div className={`p-7 rounded-47 mt-9 mb-9  ${theme === 'darkTheme' ? 'bg-searchContainerBackgroundColor' : 'bg-searchContainerThemeBackgroundColor'}  `}> 
                        <img src={sendEmail} alt='sendEmail' />
                    </div>

                    <div className={`ml-16 `}>
                        <p className={`font-openSans text-13 leading-17 ${theme === 'darkTheme' ? 'text-white' : 'text-replyMessageBodyThemeTextColor'} font-semibold`}>Step 3: Email</p>
                        <div className={`flex justify-center mt-4 `}>
                            <img src={yellowInbox} alt={'yellow inbox'} className={`w-16 h-16 mt-1`} />
                            <p className={`p-1 font-inter text-10 leading-23 ${theme === 'darkTheme' ? 'text-detailsTextColor' : 'text-leadDetailsThemeTextColor'} font-normal`}>
                                    Opened
                                <span className={`pl-1`}>

                                5th, Feb
                                </span>
                            </p>
                        </div>
                    </div>

                    </div>
                     
                     
                </div>
            </div>


        </div>
    )
}

export default RightContainer
