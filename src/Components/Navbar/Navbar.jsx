import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='dark:bg-slate-900 bg-slate-100 flex flex-col w-[50px] gap-4 hover:absolute md:absolute hover:w-[250px] h-[100%] pt-5 '>
       <NavLink
         to="/"
         className={({isActive})=> `dark:text-white flex flex-row justify-center items-center h-[50px] w-[100%] ${isActive?"text-white bg-violet-500 w-[100%] rounded-full":""}`}
       >         
               Notes
                
       </NavLink>


       <NavLink
       to="/trash"
       className={({isActive})=> `dark:text-white flex flex-row justify-center items-center h-[50px] w-[100%] ${isActive?"text-white bg-violet-500 w-[100%] rounded-full":""}`}
       >
        
                Trash
       </NavLink>
      

    </div>
  )
}

export default Navbar