import React from 'react'

function Home() {
  return (
    <div className='bg-white dark:bg-slate-800 dark:text-white text-black  w-[100%] sm:[95%] flex flex-row justify-center h-[100%]'>
      
        <div className='create-notes'>
           <form action="" className='flex flex-col gap-0 bg-black'>

                 <textarea type="text" name="" id="" className='bg-black m-0 outline-none' placeholder='Title'/>
                 <textarea name="" id="" cols="30" rows="10" className='bg-black m-0 outline-none' placeholder='Create notes...'></textarea>

                 <button className='bg-violet-600 text-white w-[70px] h-[50px] rounded-lg'>Create</button>

           </form>
        </div>

        <div className='contain-notes'>
               
               {/* this will contain all the notes saved on local storage */}


        </div>
      

       
    </div>
  )
}

export default Home