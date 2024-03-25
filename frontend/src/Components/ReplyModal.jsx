import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Button
} from '@chakra-ui/react'
import style from '../CSS/AllInbox.module.css';
import { Textarea } from '@chakra-ui/react';
import arrowDropDown from '../Assets/arrow_drop_down.png';
import variables from '../Assets/variables.png';
import preview from '../Assets/preview.png';
import attachements from '../Assets/attatchements.png';
import replyLogo from '../Assets/Reply.png'


const ReplyModal = ({ fromName, fromEmail, toEmail, messageId, body, sentAt, }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('bottom')


    return (
        <div>
             <Button variant={'none'} onClick={onOpen} className={`${style.replyBtn}  mt-241 ml-47 w-136 h-40 pt-8 pr40 pb-8 pl-24 rounded-4`}>
                    <div>

                        <img src={replyLogo} alt="" />
                    </div>
                    Reply</Button>
            {/* <div colorScheme='blue' onClick={onOpen}>
            <img src={replyLogo} alt="" /> Reply
            </div> */}
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
                {/* <DrawerOverlay /> */}
                <DrawerContent className={``} w={'842px'} style={{ position: 'absolute', top: '198px', left: '368px', bottom: '30px', borderRadius: '8px' }}>
                    <DrawerCloseButton variant={'none'} padding={'0px'} m={0} className={`text-white `} />
                    <div className={`bg-searchContainerBackgroundColor pt-11 pl-32 h-38 pb-11`}>

                        <DrawerHeader variant={'none'} p={0} style={{ fontSize: '12px' }} className={` font-openSans text-replyTextColor`} >Reply</DrawerHeader>
                    </div>
                    <DrawerBody p={0} className={`bg-bodyMessageBackgroundColor`}>
                        <div className={`mt-8 pb-8 h-24 ${style.replyborder}`}>

                            <p className={`text-replyTextColor ml-32 text-12 font-normal font-openSans leading-34`}>To : <span className={`text-replyOtherTextColor text-12 font-semibold ml-8 font-openSans leading-34`}>{fromEmail}</span></p>
                        </div>

                        <div className={`mt-8 pb-8 h-24 ${style.replyborder}`}>

                            <p className={`text-replyTextColor ml-32 text-12 font-normal font-openSans leading-34`}>From : <span className={`text-replyOtherTextColor text-12 font-bold ml-8 font-openSans leading-34`}>{fromName}</span></p>
                        </div>

                        <div className={`mt-8 pb-8 h-24 flex ${style.replyborder}`}>

                            <p className={` text-replyTextColor mr-8 ml-32 text-12 font-normal font-openSans leading-34`}>Subject :  </p>
                            <Input className={`bg-bodyMessageBackgroundColor  text-white font-openSans text-12 leading-34 font-semibold`} p={0} h={'15px'} w={'40'} m={0} border={'none'} variant={'none'} />

                        </div>

                        <Textarea border={'none'} p={0} variant={'none'} h={'57px'} w={'481px'} className={`bg-bodyMessageBackgroundColor mt-19 ml-32 font-openSans font-normal text-14 text-replyMessageBodyTextColor leading-19`} placeholder='Enter Message' />
                        {/* <textarea style={{{border: 'none'}}} name="" id="" cols="30" rows="10" className={`bg-bodyMessageBackgroundColor h-57 w-481`}>

                        </textarea> */}


                        <div className={`mt-269 pt-7 pl-12 rounded-2 flex`}>

                            <button className={`h-40 w-114 ${style.sendButtonBg}`}>
                                <div className={`flex justify-center`}>
                                    <p className={`font-openSans font-semibold text-14 leading-21 text-white mr-1`}>Send</p>
                                    <img src={arrowDropDown} alt="" />
                                </div>
                            </button>

                            <div className={`h-40 w-95 ml-20`}>
                                <img src={variables} alt="" />
                            </div>

                            <div className={`h-40 w-127 ml-20`}>
                                <img src={preview} alt="" />
                            </div>

                            <div className={`h-24 w-210 ml-20 mt-8`}>
                                <img  src={attachements} alt="" />
                            </div>


                        </div>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default ReplyModal
