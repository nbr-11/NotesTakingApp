import { createContext,useContext } from "react";

export const TrashContext = createContext({
    trashNotes:[
        {   id:1,
            title:"Intro",
            content: `Hello everyone this is Nishant`,
            edited: "",
        }
    ],
    addToTrash:(note)=>{},
    deleteFromTrash:(id)=>{},
    restoreToNotes:(id)=>{},

});

export const TrashProvider = TrashContext.Provider;

export const useTrash = ()=>{
    return useContext(TrashContext);
}