import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Overview from './componemts/Overview';
function App() {
  const [value,setValue]=useState("")
  const [savedTexts,setSavedTexts]=useState([])
  const [editThis,setEditThis]=useState()
  function handleChange(e){
    setValue(e.target.value)
  }
  function submitChange(){

    setSavedTexts(old=>[...old,{value,id:old.length}])
    setValue("")
  }
  function deleteTask(id){
    let temp=[...savedTexts]
    temp=temp.filter(x=>x.id!==id-1)
    temp=temp.map((x,index)=>({value:x.value,id:index}))
    setSavedTexts(temp)
  }
  function editTask(id){
    setEditThis(id-1)
  }
  function saveTask(id,text){
    setEditThis(-1)
    let temp=[...savedTexts]
    temp=temp.map((x,index)=>index===id-1?{value:text,id:index}:{value:x.value,id:index})
    setSavedTexts(temp)
  }
  return (
    <div className="App">
      <div>
        <input type="text" name="text" id="text" value={value}onChange={handleChange} />
        <button onClick={submitChange}>Save text</button>
      </div>
      {savedTexts.map((x,index)=><Overview text={x.value} number={x.id+1} deleteTask={deleteTask} editTask={editTask} edit={editThis===index?true:false} saveTask={saveTask}/>)}
    </div>
  );
}

export default App;
