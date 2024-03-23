import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navigation from '../Components/Navigation'
import InboxContent from '../Components/InboxContent'

const Home = () => {
  return (
    <div className='flex'>

      {/* sidebar */}
      <div className={`w-56 h-760 bg-sideBarBackgroundColor border-r-8 border-red-600`}>
        <Sidebar />
      </div>

      {/* main */}

      <div className='bg-black h-760'>

        <div className={`w-1383 h-64 bg-navigationBackgroundColor pt-21 pb-21 pl-33 `}>
          <Navigation />
        </div>

        <div className={`w-1383`}>
          <InboxContent />
        </div>
      </div>
    </div>
  )
}

export default Home
