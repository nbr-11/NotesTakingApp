import React, { useEffect, useState } from 'react'
import hamDark from '../../assets/hamDark.png';
import ham from '../../assets/ham.png'
import logo from '../../assets/logo.png'
import search from "../../assets/search.png"
import light from "../../assets/light.png"
import dark from "../../assets/dark.png"
import { useTheme } from '../../context';

function Header() {

    const [isDark,setIsDark] = useState(false);
    const [isSearchVisible,setIsSearchVisible] = useState(false);

    const {lightTheme,darkTheme} = useTheme();

    function clickHandler(){
        setIsSearchVisible((prev)=>!prev);
    }
    function closeHandler(){
        setIsSearchVisible(false);
      
    }

    function themeHandler(){
             setIsDark((prev)=>!prev);
    }
   
    useEffect(()=>{

        if(isDark === true){
                 darkTheme();
        }
        else{
            lightTheme();
        }
    },[isDark])

    return (
        <div className='w-[100vw] h-[70px] bg-slate-100 dark:bg-slate-900 flex flex-row items-center justify-between relative px-2'>

            <div className='w-fit flex flex-row gap-3'>

                <div className='flex items-center'>
                    <button className='rounded-full hover:bg-slate-300 dark:hover:bg-slate-500 w-[35px] h-[35px]'>
                        <img src={hamDark} alt="" className='hidden dark:inline-block' height={25} width={25} />
                        <img src={ham} alt="" className='inline-block dark:hidden' height={25} width={25} />
                    </button>
                </div>


                <div className='flex flex-row gap-2'>
                    <img src={logo} alt="" />
                    <p className='hidden sm:flex sm:text-2xl dark:text-white  flex-row items-center'>Notes</p>
                </div>


            </div>
            
            <div className={`absolute flex-row bg-white h-[80%] px-2 items-center rounded-lg w-[60%] justify-between ${isSearchVisible?"flex":"hidden"}`}>
            <form action="" className='h-[80%] flex flex-row bg-white items-center gap-2 w-[90%]'>
                <img src={search} alt="" width={25} height={25} className='w-[20px] h-[20px]' />
                <input type="text" className="w-[90%] h-[100%] p-1" placeholder='Search your notes' />
                
            </form>

            <div className='h-[80%]'>
            <button onClick={closeHandler} className="text-3xl ">x</button>
            </div>
            </div>
            
            <div className='flex flex-row w-[90px] justify-between'>
                    <div className='w-[33px] h-[33px] bg-white rounded-full flex items-center justify-center'>
                          <button onClick={clickHandler}><img src={search} alt="" width={20} height={20} /></button>
                    </div>

                    <div className='flex flex-row justify-center items-center'>
                          <button onClick={themeHandler}><img src={isDark?light:dark} alt="" width={35} height={35}/></button>
                    </div>
            </div>


            
        </div>
    )
}

export default Header