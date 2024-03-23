import React from 'react'
import style from '../CSS/Home.module.css';
import noMessageIllustration from '../Assets/No Message illustration.png';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const InboxContent = () => {
  return (
    <div className={` w-832 h-392 mt-142 ml-274 mr-274 mb-142`}>

     

      <div >
        <img className={`ml-276 mr-276 w-280 h-229 `} src={noMessageIllustration} alt={'noMessageIllustration'} />
      </div>

      <div className='w-533 h-115 mt-48 ml-149 mr-149'>
        <p className={`mb-24 text-24 leding-36 font-DMSans text-white h-37 font-bold text-center `}>It’s the beginning of a legendary sales pipeline </p>


        <p className=' ml-122 mr-122 w-289 h-54 font-DMSans text-18 leading-27 text-center text-messageIllustrationColor font-medium'>When you have inbound E-mails you’ll see them here</p>

      </div>


    </div>
  )
}

export default InboxContent
