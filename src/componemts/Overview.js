import React from 'react'
import { useState } from 'react'
export default function Overview({text,number,deleteTask,editTask,edit,saveTask}){
    const [inputState,setInputState]=useState(text)
    function handleChange(e){
        setInputState(e.target.value)
    }
    return(
        <div>
            {!edit?`${number}. ${text}`:<input type="text" name="text" id="text" value={inputState} onChange={handleChange} ></input>}
            <button onClick={()=>deleteTask(number)}>Delete</button>
            {!edit?<button onClick={()=>editTask(number)}>Edit</button>:<button onClick={()=>saveTask(number,inputState)}>Save</button>}
        </div>
    )
}