import {useState} from "react";

export const useInputChange = (initialValue) => {
    const [val,setVal] = useState(initialValue);
    const setChangeValue = (e) => {
        setVal(e.target.value);
    }
    return [
        val,
        setChangeValue,
        setVal
    ]
}