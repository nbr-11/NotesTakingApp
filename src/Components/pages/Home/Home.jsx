import React from 'react'
import { useState } from 'react';
import { useNotes } from '../../../context';
import Card from '../../Card/Card';

function Home() {

  const [createNote,setCreateNote] = useState(false);

  const {notes,addNotes,updateNotes,deleteNotes} = useNotes();

  const [note,setNote] = useState({title:"",content:"",edited:""});
  
  console.log(notes);
  function focusHandler(e){
    setCreateNote(prev=>!prev)
  }

  function changeHandler(e){
    setNote((prev)=>{
      return {...prev,[e.target.name]:e.target.value};
    })
  }

  function submitHandler(e){
    addNotes(note);
  }
  return (
    <div className='dark:bg-slate-800 bg-white w-[100%] sm:[95%] flex flex-col items-center min-h-screen overflow-y-scroll overflow-x-hidden'>
      
        <div className='create-notes '>

          <input type="text" name="" id="" className={`bg-slate-100 mt-6 dark:bg-slate-900  dark:border-white dark:text-white dark:border-2 dark:border-solid w-[250px] outline-none sm:w-[300px] md:[350px] p-3 ${!createNote?"inline-block":"hidden"}`} placeholder='Create a Note' onFocus={focusHandler}/>
           
           <div className={`${createNote?"flex":"hidden"} flex flex-col bg-slate-100 dark:bg-slate-900 mt-10 left-4 self-center rounded-lg`}> 
           <form action="" className= {`bg-slate-100 flex flex-col gap-0 dark:bg-slate-900 p-2 h-[150px] rounded-lg`}>
                 <textarea type="text" name="title" id="" className='bg-slate-100 dark:bg-slate-900 m-0 outline-none resize-none text-black dark:text-white p-2 w-[250px] sm:w-[300px] md:w-[350px] rounded-lg' placeholder='Title' value={note.title}  onChange={changeHandler}/>
                 <textarea name="content" id="" cols="30" rows="10" className='bg-slate-100 dark:bg-slate-900 m-0 outline-none resize-none  text-black dark:text-white p-2 w-[250px] sm:w-[300px] md:w-[350px] rounded-lg h-[100px]' placeholder='Create notes...' value={note.content} onChange={changeHandler}></textarea>

                 
           </form>
           <div className='flex justify-between m-3 rounded-lg'>
                 <button type="Submit" className='bg-violet-600 text-white w-[70px] h-[50px] rounded-lg' onClick={submitHandler}>Create</button>
                 <button className='bg-violet-600 text-white w-[70px] h-[50px] rounded-lg' onClick={focusHandler}>Back</button>
          </div>
           </div>
        </div>

        <div className='contain-notes w-[100%] outline-none sm:w-[50%] md:[60%] p-4 mt-4 dark:bg-slate-800 bg-white flex flex-col gap-4'>
               
               {/* this will contain all the notes saved on local storage */}
               
               {notes.map((note)=>(<Card note={note}/>))}


        </div>
      

       
    </div>
  )
}

export default Home