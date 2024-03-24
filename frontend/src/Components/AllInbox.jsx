import React from 'react';
import style from '../CSS/AllInbox.module.css';
import refresh from '../Assets/refresh.png';
import downArrow from '../Assets/DownArrow.png';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import searchIcon from '../Assets/Search Icon.png'
import newestFirtArrow from '../Assets/Newset Firts down Arrow.png'

import { Tooltip, IconButton } from '@chakra-ui/react';
import RightContainer from './RightContainer';

const AllInbox = () => {
    return (
        <div className={`h-696 flex ${style.contBorder} absolute top-67 left-66 pl-15`}>

            {/* left container */}
            <div className={`w-278 h-696 ${style.contentBorder}`}>


                {/* All Inboxs container */}
                <div className={`flex`}>


                    <div className={`w-171 h-71`}>

                        {/* All inbox text and icon */}
                        <div className={`flex mt-7`}>


                            {/* All inbox text */}
                            <div className={`mt-10 ml-10 `}>
                                <p className={` text-allInboxsTextColor w-112 h-27 font-openSans text-20 leading-28 font-bold`}>All Inbox(s)</p>
                            </div>

                            <div className={` pt-5 pr-4 `}>
                                <IconButton
                                    className={``}
                                    variant={'none'}

                                    icon={<img src={downArrow} alt="Down Arrow" className={``} />}

                                />
                            </div>
                        </div>


                        {/* inbox selected text */}
                        <div className={`w-171 h-23 pl-2`}>
                            <p className={`text-white font-openSans text-14 leading-19 font-bold`}>25/25 <span className={`text-inboxSelectedTextColor font-normal`}>Inboxes selected</span></p>
                        </div>
                    </div>

                    <div className={` ml-63 mt-16 mr-12 mb-23`}>
                        <Tooltip label='Refresh' placement='bottom'>
                            <IconButton
                                className={`w-32 h-32 rounded-4 p-8 bg-refreshButtonBackgroundColor`}
                                variant={'none'}

                                icon={<img src={refresh} alt="refresh" className={`w-16 h-16`} />}

                            />
                        </Tooltip>
                    </div>
                </div>


                {/* search bar container */}
                <div className='mt-6'>

                    <div className={``}>
                        <InputGroup className={`bg-searchContainerBackgroundColor`}>
                            <InputLeftElement pointerEvents='none'>
                                <IconButton
                                    className={``}
                                    variant={'none'}

                                    icon={<img src={searchIcon} alt="Search Icon" className={``} />}

                                />
                            </InputLeftElement>
                            <Input style={{ border: '1px solid white' }} type='text' placeholder='Search' className={`font-inter font-normal text-14 leading-20 text-white `} />
                        </InputGroup>
                    </div>

                    <div className={`flex mt-2 `} >
                        <div className={`w-129 h-26 flex `}>
                            <p className={`w-34 h-26 rounded-17 leading-20 bg-newRepliesBackgroundColor text-twentySixTextColor pt-3 pl-8 pr-8 pb-3`}>26</p>
                            <p className={`pl-4 text-14 leading-20 text-newRepliesTextColor font-semibold font-inter pt-3`}>New Replies</p>
                        </div>

                        <div className={`flex ml-50 justify-between w-79`}>

                           

                                <p className={`mt-1 font-semibold font-inter text-14 leading-20 text-newRepliesTextColor`}>Newest</p>
                                {/* <img src={newestFirtArrow} alt='newestFirtArrow' className={`w-10 h-6 mt-12 ml-69`} /> */}

                                <IconButton
                                    className={`mt-14 ml-15`}
                                    variant={'none'}
                                    h={0}

                                    icon={<img src={newestFirtArrow} alt='newestFirtArrow' className={``} />}

                                />


                            
                        </div>
                    </div>


                </div>

                {/* Main Content All Mail inbox */}

                <div>
                    
                </div>


            </div>

            {/* middle container */}
            <div className={`w-799 ${style.contentBorder}`}>

            </div>

            {/* right container */}
            <div className={`w-278 ${style.contentBorder}`}>
                  <RightContainer />
            </div>

        </div>
    )
}

export default AllInbox
