import React, { useEffect, useState } from "react";

function App() {
  const [message,setMessage]=useState("");

  useEffect(()=>{
    fetch("https://mern-deploy-vilf.onrender.com")
    .then((res)=>res.json())
    .then((data)=>setMessage(data.message))
  },[])

  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>Hello i am gourav</h2>
    
    </div>
  );
}

export default App;
