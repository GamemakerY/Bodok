import { useContext } from "react";
import { LibraryContext } from "../contexts/LibraryContext";

export function useLibrary(){
    const context = useContext(LibraryContext)

    return context
}