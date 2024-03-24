import React from 'react'
import barChart from '../Assets/bar_chart.png';
import menuContainer from '../Assets/menuContiner.png';
import dashboard from '../Assets/dashboard.png';
import sendMessage from '../Assets/Frame 23.png';
import email from '../Assets/email.png';
import search from '../Assets/search.png';
import home from '../Assets/Home.png';
import frameLogo from '../Assets/FrameLogo.png'
import { IconButton, Flex, Image } from '@chakra-ui/react';
import style from '../CSS/Home.module.css'
import { Avatar, } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import InboxContent from './InboxContent';
import { Link } from 'react-router-dom';
import AllInbox from './AllInbox';


const Sidebar = () => {
    return (
        <div className='relative'>

            <div className='w-48 h-70'>
                <IconButton
                    className='mt-17 ml-8 mr-8 mb-21'
                    variant={'none'}
                    icon={<img src={frameLogo} alt="frameLogo" />}

                />
            </div>

            <div className={`w-48 h-634 ml-1 mr-1  ${style.cont}`}>

                <div className={`bg-black h-546 w-28 mt-49 ml-10 mr-10 ${style.cont} `}>

                    <Tabs variant='none' className={`w-28 h-546 ${style.cont}`}>
                        <Flex>
                            <TabList style={{ 'flexDirection': 'column' }} >
                                <Tab className='h-28 w-28' _selected={{ height: '28px', width: '28px', color: 'white', bg: 'blue.500' }} variant={'none'}>
                                    <Tooltip label='Home' placement='right'>
                                        <IconButton
                                            // className='w-28 h-28 mb-32'
                                            variant={'none'}

                                            icon={<img src={home} alt="home" className='mr-10 ml-2' />}

                                        />
                                    </Tooltip>
                                </Tab>
                                <Tab className='h-28 w-28 mt-32' variant={'none'}>
                                    <Tooltip label='Search' placement='right'>
                                        <IconButton
                                            // className='w-28 h-28 mb-32'
                                            aria-label="Search database"
                                            variant={'none'}
                                            icon={<img src={search} alt="search" className='mr-10' />}

                                        />
                                    </Tooltip>
                                </Tab>

                                <Tab className='h-28 w-28 mt-32' variant={'none'}>
                                    <Tooltip label='Onebox' placement='right'>
                                        <Link to={'/onebox'}><IconButton
                                            // className='w-28 h-28 mb-32'
                                            variant={'none'}
                                            icon={<img src={menuContainer} alt="menuContainer" className='mr-10' />}

                                        /></Link>
                                    </Tooltip>
                                </Tab>



                            </TabList>
                            {/* <div className='bg-black'>
                             <InboxContent />
                            </div> */}
                            <TabPanels className={`ml-2 absolute top-65 left-57 h-693`}>

                                <TabPanel backgroundColor={'black'} className={`w-1383`}>
                                    <InboxContent />
                                </TabPanel>
                                <TabPanel className={`w-1383 ${style.cont}`}>
                                    <p>one!</p>
                                </TabPanel>
                                <TabPanel className={`w-1383 h-696 relative bg-black ${style.cont}`}>
                                   <AllInbox />
                                </TabPanel>


                            </TabPanels>

                        </Flex>
                    </Tabs>





                    {/* <Tooltip label='Search' placement='right'>
                        <IconButton
                            className='w-28 h-28 mb-32'
                            aria-label="Search database"
                            variant={'none'}
                            icon={<img src={search} alt="search" className='mr-10' />}

                        />
                    </Tooltip>


                    <Tooltip label='Email Accounts' placement='right'>
                        <IconButton
                            className='w-28 h-28 mb-32'
                            variant={'none'}
                            icon={<img src={email} alt="email" className='mr-10' />}

                        />
                    </Tooltip>


                    <Tooltip label='Campaigns' placement='right'>
                        <IconButton
                            className='w-28 h-28 mb-32'
                            variant={'none'}
                            icon={<img src={sendMessage} alt="sendMessage" className='mr-10' />}

                        />
                    </Tooltip>



                    <Tooltip label='Lead List' placement='right'>
                        <IconButton
                            className='w-28 h-28 mb-32'
                            variant={'none'}
                            icon={<img src={dashboard} alt="dashboard" className='mr-10' />}

                        />
                    </Tooltip>

                    <Tooltip label='Onebox' placement='right'>
                        <IconButton
                            className='w-28 h-28 mb-32 bg-eventBackgroundColor'
                            variant={'none'}
                            icon={<img src={menuContainer} alt="menuContainer" className='mr-10 ml-10' />}

                        />
                    </Tooltip>
                    <Tooltip label='Analytics' placement='right'>
                        <IconButton
                            className='w-28 h-28'
                            variant={'none'}
                            icon={<img src={barChart} alt="barChart" className='mr-10' />}

                        />
                    </Tooltip> */}
                </div>
            </div>

            <div className='h-56 w-48 pt-12 pb-12 pl-8 pr-8'>
                <Avatar boxSize="32px" name='Dan Abrahmov' src='' />
            </div>
        </div>
    )
}

export default Sidebar
