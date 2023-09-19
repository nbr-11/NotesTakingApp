import React from 'react'
import { Header,Navbar } from './Components'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
       <Header/>
       <div>
       <Outlet></Outlet>
       <Navbar></Navbar>
       </div>
       
    </>
  )
}

export default Layout