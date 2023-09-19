import { useState } from 'react'
import { useNotes,NotesProvider} from './context'
import './App.css'

function App() {
  
   const[notes,setNotes] = useState([]);
   
   const addNotes = (note)=>{
         setNotes((prevnotes)=>([{id:Date.now(),...note},...prevnotes]))
   } 

   const updateNotes = (id,note)=>{
    setNotes((prevnotes)=>prevnotes.map((prevnote)=>(prevnote.id === id?{...note,edited:Date.now()}:prevnote)))
   }

   const deleteNotes = (id) =>{
     setNotes((prevNotes)=>prevNotes.filter((prevnote)=>(prevnote.id !== id)));
   }


   
  return (
    <NotesProvider value={{notes,addNotes,updateNotes,deleteNotes}}>
    
    </NotesProvider>
  )
}

export default App
