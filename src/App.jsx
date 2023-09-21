import { useEffect, useState } from 'react'
import { useNotes,NotesProvider, ThemeProvider,useTrash, TrashProvider} from './context'
import './App.css'
import Layout from './Layout';


function App() {
  

  //implementing the themeMode context

   const[themeMode,setThemeMode] = useState("dark");
   
   const lightTheme = ()=>{
    setThemeMode("light");
   }
   const darkTheme = ()=>{
    setThemeMode("dark");
   }

   useEffect(()=>{
          document.querySelector('html').classList.remove('light','dark');
          document.querySelector('html').classList.add(themeMode);
   },[themeMode])

  //  implementing the notes context

   const[notes,setNotes] = useState([]);

   const addNotes = (note)=>{
         const date = new Date();
         setNotes((prevnotes)=>([{id:Date.now(),...note,edited:`${date.getMonth()} ${date.getDate()} ${date.getFullYear()} at ${date.getHours()} ${date.getMinutes()}`},...prevnotes]));
   } 

   const updateNotes = (id,note)=>{
    const date = new Date();
    setNotes((prevnotes)=>prevnotes.map((prevnote)=>((prevnote.id === id)?{...note,edited:`${date.getMonth()} ${date.getDate()} ${date.getFullYear()} at ${date.getHours()} ${date.getMinutes()}`}:prevnote)))
   }

   const deleteNotes = (id) =>{

     const tNote = notes.filter((note)=>note.id === id)
     setNotes((prevNotes)=>prevNotes.filter((prevnote)=>(prevnote.id !== id)));
     addToTrash(tNote[0]);
   }


   useEffect(()=>{
     const temp = JSON.parse(localStorage.getItem("noteskey"));

     if(temp && temp.length>0){
      setNotes(temp);
     }
   },[]);

   useEffect(()=>{
       localStorage.setItem("noteskey",JSON.stringify(notes));

   },[notes]);

   //implementing trash context

   const [trashNotes,setTrashNotes] = useState([{}]);
   
   function addToTrash(note){
     setTrashNotes((prev)=>[{...note},...prev]);
   }

   function restoreToNotes(id){
    const noteTorestore = trashNotes.filter((note)=>(note.id === id))
    addNotes(noteTorestore[0]);
   }

   function deleteFromTrash(id){
    setTrashNotes((prevNotes)=>(prevNotes.filter((note)=>(note.id!==id))));
   }


   //implementing local storage for trash
   useEffect(()=>{
    const temp = JSON.parse(localStorage.getItem("trashkey"));

    if(temp && temp.length>0){
     setTrashNotes(temp);
    }
  },[]);

  useEffect(()=>{
      localStorage.setItem("trashkey",JSON.stringify(trashNotes));

  },[trashNotes]);

  return (

    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
             <NotesProvider value={{notes,addNotes,updateNotes,deleteNotes}}>
              <TrashProvider value={{trashNotes,addToTrash,restoreToNotes,deleteFromTrash}}>
              <Layout></Layout>

              </TrashProvider>
              

              </NotesProvider>
      </ThemeProvider>
       
   
    </>
  )
}

export default App
