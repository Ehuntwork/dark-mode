import { useLocalStorage } from "./useLocalStorage";
import {useEffect} from 'react'

export const useDarkMode = (intialvalues)=>{
    const [value, setValue] = useLocalStorage('DarkMode', intialvalues)
    
    useEffect(()=>{
        const body = document.getElementsByTagName('body')[0]

        if(value === false){
            body.classList.remove("dark-mode")
        }
        else{
            body.classList.add("dark-mode")
        }
    },[value])

    return [value, setValue];
}