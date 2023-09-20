import React from 'react'
import { Header,Navbar } from './Components'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col w-screen h-screen overflow-x-hidden relative'>
       <Header/>
      
      <div className='h-full flex flex-row justify-between relative'>
       <Navbar></Navbar>
       <Outlet></Outlet>

       </div>
       
       
       
    </div>
  )
}

export default Layout