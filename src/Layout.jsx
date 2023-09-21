import React from 'react'
import { Header,Navbar } from './Components'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col w-screen h-screen overflow-hidden fixed'>
       <Header/>
      
      <div className=" h-full w-full  flex flex-row justify-between">
       <Navbar></Navbar>
       <Outlet></Outlet>

       </div>
       
       
       
    </div>
  )
}

export default Layout