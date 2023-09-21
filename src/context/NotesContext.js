import { createContext, useContext } from "react";

export const NotesContext = createContext({
    notes:[
        {   id:1,
            title:"Intro",
            content: `Hello everyone this is Nishant`,
            edited: "",
        }
    ],
    addNotes:(Note)=>{},
    updateNotes:(id,note)=>{},
    deleteNotes:(id)=>{},
    
});

export const NotesProvider = NotesContext.Provider;

export const useNotes = () => {
    return useContext(NotesContext);

}