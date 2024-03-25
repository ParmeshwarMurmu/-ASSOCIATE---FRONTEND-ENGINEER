import React from 'react'
import style from '../CSS/AllInbox.module.css'
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, TabIndicatorLeft, Flex } from '@chakra-ui/react'
import MiddleContainer from './MiddleContainer';
import { MdCircle } from "react-icons/md";
import allMailSendLogo from '../Assets/allMailSendIcon.png'



const AllMailsContainer = () => {


    const { allMails, isLoading, isError } = useSelector((store) => {
        return {
            isLoading: store.AllListMailReducer.isLoading,
            allMails: store.AllListMailReducer.allMails,
            isError: store.AllListMailReducer.isError,
        }
    }, shallowEqual)

    console.log("***");
    console.log(allMails)
    console.log('loading', isLoading)
    console.log("error", isError)


    return (
        <div className={`${style.allMailContainer}`}>

            {
                allMails.length > 0 ?

                    <div>

                        <div>
                            <Tabs position="relative" variant='none' p={0} m={0}  className={``}>
                                <Flex>
                                    <TabList className={`${style.contBorder} absolute left-20`} style={{ 'flexDirection': 'column', 'margin': '0px', 'padding': '0px'  }} variant='none' p={0} m={0}>

                                        {
                                            allMails.map((el, index) => (
                                                <Tab p={0} m={0}  variant="none"  w={'278px'} className={``} key={index}>
                                                    <div>
                                                        <div  style={{ textAlign: 'left' }}>
                                                            <p className={`text-left`}>{el.fromEmail}</p>
                                                            <p> Mar 7</p>
                                                        </div>

                                                        <p  style={{ textAlign: 'left' }}>I've tried a lot</p>
                                                         

                                                         {/* Interest and campign Name */}


                                                        <div  style={{ textAlign: 'left' }}>

                                                        <div className={`flex`}>
                                                           {/* icon */}
                                                           <MdCircle />
                                                           <p>Interested</p>
                                                        </div>

                                                        <div className={`flex`}>
                                                            {/* icon */}
                                                            <img src={allMailSendLogo} alt="" />
                                                            <p>Campaign Name</p>
                                                        </div>

                                                        </div>


                                                    </div>
                                                </Tab>
                                            ))
                                        }

                                    </TabList>

                                    
                                    <TabPanels className={`ml-2 absolute top-35 left-36 h-693 `}>

                                        {
                                            allMails.map((el) => (
                                                <TabPanel p={0} m={0} className={`${style.contBorder} w-799 h-693`}>
                                                    <MiddleContainer {...el} />
                                                </TabPanel>
                                            ))
                                        }


                                    </TabPanels>
                                </Flex>
                            </Tabs>
                        </div>
                        {
                            allMails.map((el) => (

                                <div>

                                    {/* Tab Pannele */}

                                </div>
                            ))
                        }
                    </div> :

                    <div>
                        No Mails
                    </div>
            }
        </div>
    )
}

export default AllMailsContainer
