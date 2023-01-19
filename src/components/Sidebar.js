import React from 'react'
import {Navbar,Chats, Search} from './index'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
