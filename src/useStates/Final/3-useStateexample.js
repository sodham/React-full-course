import React, { useState } from 'react'

const Index = () => {
    const [showData, setShowData] = useState(false);
    
    const showContent = () => {
        setShowData(!showData);
    };
  return (
    <div> 
        <button onClick={showContent}>{showData ? "hide" : "show"}</button>
        {showData &&(

<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, delectus.</div>
        )}
        
    </div>
  )
}

export default Index;
