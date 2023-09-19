import { createContext,useContext } from "react";

export const TrashContext = createContext({
    notes:[
        {   id:1,
            title:"Intro",
            content: `Hello everyone this is Nishant`,
            edited: "",
        }
    ],
    deleteFromTrash:()=>{},
    restoreToNotes:()=>{},

});

export const TrashProvider = TrashContext.Provider;

export const useTrash = ()=>{
    return useContext(TrashContext);
}