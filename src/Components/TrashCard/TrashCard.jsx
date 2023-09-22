import React from 'react'
import { useTrash } from '../../context'
import { useNotes } from '../../context'

function TrashCard({note}) {

    const {deleteFromTrash} = useTrash();
    const {addNotes}  = useNotes();
  return (
    <div className='w-[90%] h-fit dark:bg-slate-900 bg-slate-100 text-black dark:text-white text-xl flex flex-col p-2 justify-between'>
          
          <button className='self-end'><span className='text-[20px]' onClick={()=>(deleteFromTrash(note.id))}>X</span></button>

          <div className='flex flex-col w-[100%]'>
          <input value= {note.title} name="title"  className=' dark:bg-slate-900 bg-slate-100 ' readOnly></input> 
          <input value= {note.content} name="content" className=' dark:bg-slate-900 bg-slate-100 ' readOnly></input>
          </div>

          <div className='flex flex-row w-[100%] justify-between mt-4'>
              <button onClick={()=>{addNotes(note); deleteFromTrash(note.id);}}><span className='text-[15px]'>Restore</span></button>
              
          </div>
          


         
    </div>
  )
}

export default TrashCard