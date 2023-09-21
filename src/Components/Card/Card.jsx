import React from 'react'
import { useNotes } from '../../context'
import { useState } from 'react';

function Card({note}) {

    const[isNotereadonly,setIsNotereadonly] = useState(true)
    const {addNotes,updateNotes,deleteNotes} = useNotes();

    function editHandler(){

        setIsNotereadonly(prev=>!prev);
    }

    function changeHandler(e){
        updateNotes(note.id,{...note,[e.target.name]:e.target.value});
    }

  return (
    <div className='w-[90%] h-fit dark:bg-slate-900 bg-slate-100 text-black dark:text-white text-xl flex flex-col p-2 justify-between'>
          
          <button className='self-end'><span className='text-[20px]' onClick={()=>(deleteNotes(note.id))}>X</span></button>

          <div className='flex flex-col w-[100%]'>
          <input value= {note.title} name="title" readOnly={isNotereadonly} className=' dark:bg-slate-900 bg-slate-100 ' onChange={changeHandler}></input> 
          <input value={note.content} name="content" readOnly={isNotereadonly} className=' dark:bg-slate-900 bg-slate-100 'onChange={changeHandler}></input>
          </div>

          <div className='flex flex-row w-[100%] justify-between mt-4'>
              <button onClick={editHandler}><span className='text-[15px]'>{isNotereadonly?"edit":"save"}</span></button>
              <span className='text-[15px]'>Edited {note.edited}</span>
          </div>
          


         
    </div>
  )
}

export default Card