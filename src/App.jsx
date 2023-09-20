import { useEffect, useState } from 'react'
import { useNotes,NotesProvider, ThemeProvider} from './context'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from './Components';
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
         setNotes((prevnotes)=>([{id:Date.now(),...note},...prevnotes]))
   } 

   const updateNotes = (id,note)=>{
    const date = new Date();
    setNotes((prevnotes)=>prevnotes.map((prevnote)=>((prevnote.id === id)?{...note,edited:`${date.getMonth()} ${date.getdate()} ${date.getFullYear()}`}:prevnote)))
   }

   const deleteNotes = (id) =>{
     setNotes((prevNotes)=>prevNotes.filter((prevnote)=>(prevnote.id !== id)));
   }


   useEffect(()=>{
     const notes = localStorage.getItem("notes");

     if(notes && notes.length>0){
      setNotes(notes);
     }
   },[]);

   useEffect(()=>{
       localStorage.setItem("notes",JSON.stringify(notes));

   },[notes]);

   
  return (

    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
             <NotesProvider value={{notes,addNotes,updateNotes,deleteNotes}}>
                        
              <Layout></Layout>

              </NotesProvider>
      </ThemeProvider>
       
   
    </>
  )
}

export default App
