import React from 'react'
import sendEmail from '../Assets/Send email.png';
import sendLogo from '../Assets/send.png';
import yellowInbox from '../Assets/yellow inbox.png';
import style from '../CSS/AllInbox.module.css'

const RightContainer = () => {
    return (
        <div>

            {/* Lead Details */}
            <div className={`bg-searchContainerBackgroundColor w-268 h-36 rounded-8 pt-8 pb-8 pl-12 mt-15 ml-5 mr-5`}>
                <p className={`font-inter font-semibold text-14 leading-20 text-white`}>Lead Details</p>

            </div>

            {/* Details */}

            <div className='mt-68 ml-7 mr-7 pt-8 pl-12 pr-14 pb-27'>

                <div className={`flex justify-between`}>
                    <p className={`font-inter font-normal text-12 leading-14 text-white`}>Name</p>
                    <p className={`font-inter font-normal text-14 leading-16 text-detailsTextColor`}>Oriando</p>
                </div>


                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 text-white`}>Email Id</p>
                    <p className={`font-inter font-normal text-14 leading-16 text-detailsTextColor`}>Oriando@gmail.com</p>
                </div>

                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 text-white`}>Contact No</p>
                    <p className={`font-inter font-normal text-14 leading-16 text-detailsTextColor`}>+54-9062827869</p>
                </div>


                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 text-white`}>Linkedin</p>
                    <p className={`font-inter font-normal text-14 leading-16 text-detailsTextColor`}>Lead Details</p>
                </div>

                <div className={`flex justify-between mt-20`}>
                    <p className={`font-inter font-normal text-12 leading-14 text-white`}>Company Name</p>
                    <p className={`font-inter font-normal text-14 leading-16 text-detailsTextColor`}>Reachinbox</p>
                </div>



            </div>

            {/* Activities */}

            <div className={`bg-searchContainerBackgroundColor rounded-8 pt-8 pb-8 pl-12 pr-12 mt-16`}>
                <p className={`font-inter text-14 leading-20 text-white font-semibold`}>Activities</p>
            </div>

            {/* Campaign Name */}

            <div className={`mt-16 ml-10 mr-10 pt-13 pl-30`}>
                <p className={`mb-20 font-openSans font-semibold text-white text-15 leading-21`}>Campaign Name</p>

                <div className={`mb-16 flex`}>

                    <p className={`font-openSans font-semibold text-12 leading text-white pr-8 ${style.stepsBorder}`}> <span className={`font-semibold pr-1`}>3</span>Steps</p>
                    <p className={`font-openSans font-semibold text-12 leading text-white ml-8`}> <span className={`font-normal`}>5</span>Days in Sequence</p>
                </div>

                {/* setUp Emails */}
                <div className={``}>

                    <div className={`mb-32 flex`}>

                    
                    <div className={`p-7 rounded-47 mt-9 mb-9  bg-searchContainerBackgroundColor`}> 
                        <img src={sendEmail} alt='sendEmail' />
                    </div>

                    <div className={`ml-16 `}>
                        <p className={`font-openSans text-13 leading-17 text-white font-semibold`}>Step 1: Email</p>
                        <div className={`flex justify-center `}>
                            <img src={sendLogo} alt={'send logo'} />
                            <p className={`p-1 font-inter text-10 leading-23 text-detailsTextColor font-normal`}>
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

                    
                    <div className={`p-7 rounded-47 mt-9 mb-9  bg-searchContainerBackgroundColor`}> 
                        <img src={sendEmail} alt='sendEmail' />
                    </div>

                    <div className={`ml-16 `}>
                        <p className={`font-openSans text-13 leading-17 text-white font-semibold`}>Step 1: Email</p>
                        <div className={`flex justify-center mt-4  `}>
                            <img src={yellowInbox} alt={'yellow inbox'} className={`w-16 h-16 mt-1`} />
                            <p className={`p-1 font-inter text-10 leading-23 text-detailsTextColor font-normal`}>
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

                    
                    <div className={`p-7 rounded-47 mt-9 mb-9  bg-searchContainerBackgroundColor`}> 
                        <img src={sendEmail} alt='sendEmail' />
                    </div>

                    <div className={`ml-16 `}>
                        <p className={`font-openSans text-13 leading-17 text-white font-semibold`}>Step 1: Email</p>
                        <div className={`flex justify-center mt-4 `}>
                            <img src={yellowInbox} alt={'yellow inbox'} className={`w-16 h-16 mt-1`} />
                            <p className={`p-1 font-inter text-10 leading-23 text-detailsTextColor font-normal`}>
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
