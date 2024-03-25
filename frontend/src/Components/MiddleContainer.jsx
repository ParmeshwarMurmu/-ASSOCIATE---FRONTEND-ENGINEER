import React from 'react'
import style from '../CSS/AllInbox.module.css'
import MenuItemMettingCompleted from './MenuItemMettingCompleted'
import MoveMenuItem from './MoveMenuItem'
import ThreeDotsMenuItem from './ThreeDotsMenuItem'
import vector from '../Assets/Vector.png'
import { Button } from '@chakra-ui/react'
import replyLogo from '../Assets/Reply.png'
import ReplyModal from './ReplyModal';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

const MiddleContainer = ({ fromName, fromEmail, toEmail, messageId, body, sentAt, }) => {

    const { theme } = useSelector((store) => {
        return {
            theme: store.ThemeReducer.theme,
        }
    }, shallowEqual)

    const formatTime = (sentAt) => {
        let formattedTime = new Date(sentAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        formattedTime = formattedTime.split(' ');
        console.log(formattedTime);

        

        // Extracting parts of the formatted time
        // const [, day, month, year, time] = formattedTime.match(/(\d+) (\w+) (\d+), (.*)/);
        return `${formattedTime[1]} ${formattedTime[0]} ${formattedTime[2]} : ${formattedTime[4]}${formattedTime[5]}`;
    };

    return (
        <div className={`${theme === 'darkTheme' ? 'bg-sideBarBackgroundColor' : 'bg-sidebarLightThemeBackgroundColor'} ml-6`}>

            {/* Meeting completed  */}
            <div className={`ml-21 flex justify-between`}>

                <div className={`mt-18 `}>
                    <p className={`font-inter font-semibold text-14 leading-20  ${theme === 'darkTheme' ? 'text-white' : 'text-sideBarBorderColor'}`}>Oriando</p>
                    <p className={`font-inter font-normal text-12 leading-41  ${theme === 'darkTheme' ? 'text-white' : 'text-sideBarBorderColor'}`}>orladom@gmail.com</p>
                </div>

                <div className={`flex mt-47 ml-8 mr-24`}>

                    {/* meeting status */}
                    <div className={` mr-16 rounded-4 `}>
                        <MenuItemMettingCompleted />
                    </div>


                    {/* move */}
                    <div className={` mr-14 rounded-4`}>
                        <MoveMenuItem />
                    </div>

                    {/* three dots */}

                    <div className={` rounded-4`}>
                        <ThreeDotsMenuItem />
                    </div>
                </div>
            </div>


            {/* Today */}
            <div className={`${style.today} relative mt-20 ml-21 mr-21 mb-20`}>

                <div style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className={`bg-todayBackgroundColor absolute p-4 h-22 w-50`}>

                    <p className={` font-openSans text-10 leading-71 text-white text-center`}>Today</p>
                </div>


            </div>

            {/* single inbox  */}

            <div className={`pl-16 pr-16 pt-12 pb-12 ml-21 mr-25  ${theme === 'darkTheme' ? 'bg-bodyMessageBackgroundColor' : 'bg-newProductLaunchThemeBckground'} rounded-4 `}>

                <div className={``}>
                    <div className={`flex justify-between  mb-10`}>
                        <p className={`font-openSans text-14 leading-19 font-semibold  ${theme === 'darkTheme' ? 'text-newProductTextColor' : 'text-black'} `}>New Product Launch</p>
                        <p className={`text-14 leading-33 font-normal text-emailDateTimeTextColor font-SFPro`}>{formatTime(sentAt)}</p>
                    </div>

                    <p className={`text-14 leading-33 font-normal  ${theme === 'darkTheme' ? 'text-emailDetailsTextColor ' : 'text-newProductLaunchThemeTextColor'} font-SFPro`}>from : {fromEmail}</p>
                    <p className={`mt-12 text-14 leading-33 font-normal ${theme === 'darkTheme' ? 'text-emailDetailsTextColor ' : 'text-newProductLaunchThemeTextColor'} font-sfPro`}>to : {toEmail}</p>
                </div>


                <div className={`mt-18 ${theme === 'darkTheme' ? 'text-bodyMessageColor' : 'text-replyMessageBodyTextColor'}  font-openSans font-normal text-14 leading-19`}>
                    {/* <p className={`text-bodyMessageColor font-openSans font-normal text-14 leading-19`}>Hi FIRST_NAME ,
                        <br /> <br />

                        I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
                    </p>
                    {body} */}

                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </div>


            </div>


            {/* view All */}

            <div className={`${style.today} relative mt-32 ml-21 mr-21 mb-20`}>

                <div style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className={`bg-todayBackgroundColor absolute p-5 w-146 h-24 flex justify-center`}>
                    <img src={vector} alt="" className={`w-9 h-12`} />
                    <p className={` font-openSans text-10 leading-71 text-white ml-4 `}>View all <span className={`text-twentySixTextColor`}> 4 </span> replies</p>
                </div>

            </div>


            {/* Reply Button { fromName, fromEmail, toEmail, messageId, body, sentAt, } */}
            {/* className={`${style.replyBtn} ${style.contBorder} mt-241 ml-19 w-136 h-40 pt-8 pr40 pb-8 pl-24 rounded-4`} */}

            <div >
                <ReplyModal fromName = {fromName} fromEmail={fromEmail}  toEmail={toEmail}
                 messageId={messageId} body = {body} sentAt = {sentAt}
                />
                {/* <Button className={`${style.contBorder}`} variant={'none'}>
                    <div className={`${style.contBorder}`}>

                        <img src={replyLogo} alt="" />
                    </div>
                    Reply</Button> */}

                {/* <button className={`${style.contBorder}`}>
                    <div className={`${style.contBorder}`}>

                        <img src={replyLogo} alt="" />
                    </div>
                </button> */}
            </div>



        </div>
    )
}

export default MiddleContainer
