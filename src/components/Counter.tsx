import {useState} from "react";
import classes from "./style.module.scss";

export const Counter = () =>{
    const [count,setCount] = useState<number>(0)
    const increment = () =>setCount(prevState => ++prevState)
    return(
        <div>
            <button className={classes.btn} onClick={increment}>
                +
            </button>
            {count} ===
        </div>
    )
}