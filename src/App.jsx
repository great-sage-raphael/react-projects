import { useState } from "react";


function App() {
let [counter,setcounter]=useState(15)
const addvalues=()=>{
  if(counter<20){
    setcounter(counter+1)
  }

console.log("added")
}
const subvalue =()=>{
  if(counter>0){
    setcounter(counter-1)

  }
  
  console.log("sub")
}

  return (
    <>
    <h1>counte is :{counter}</h1>
    
   <button onClick={addvalues}>add counter</button>
   <button onClick={subvalue}>decrement counter</button>
    </>
   
  )

}

export default App
