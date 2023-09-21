import React from 'react'
import { useTheme, useTrash } from '../../../context'
import Card from '../../Card/Card';

function Trash() {

  const {trashNotes} = useTrash();
 
  return (

    <div className='w-screen h-screen flex flex-col items-center dark:bg-slate-800 bg-white overflow-y-scroll p-9'>
    <div className='contain-notes w-[60%] h-fit outline-none sm:w-[50%] md:[60%] p-4 mt-4 dark:bg-slate-800 bg-white flex flex-col gap-4'>
               
{/* this will contain all the notes saved on local storage */}

{trashNotes.map((note)=>(<Card note={note}/>))}

</div>
</div>


  )
}

export default Trash