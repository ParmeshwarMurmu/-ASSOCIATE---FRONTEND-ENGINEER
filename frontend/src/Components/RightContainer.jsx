import React from 'react'
import sendEmail from '../Assets/Send email.png';
import sendLogo from '../Assets/send.png'

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

            <div>
                <p>Campaign Name</p>

                <div>

                    <p>3 Steps</p>
                    <p>5 Days in Sequence</p>
                </div>

                {/* setUp Emails */}
                <div>

                    <div>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <p>Step 1: Email</p>
                        <div>
                            <img src="" alt="" />
                            <p>
                                <span>Sent</span>
                                3rd, Feb
                            </p>
                        </div>
                    </div>

                    <div>
                        <p>Step 2: Email</p>
                        <div>
                            <img src="" alt="" />
                            <p>
                                <span>Opened</span>
                                5th, Feb
                            </p>
                        </div>
                    </div>

                    <div>
                        <p>Step 3: Email</p>
                        <div>
                            <img src="" alt="" />
                            <p>
                                <span>Opened</span>
                                5th, Feb
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RightContainer
