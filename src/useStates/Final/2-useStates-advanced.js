import React, { useState } from 'react'

const Index = () => {

  // const initiaObj= {
  //   //   firstName: 'sodham',
  //   //   lastName: 'reddy',
  //   //   age: '27',
  //   // };

//   const [data, setData] = useState({ 
//     firstName: 'sodham',
//   lastName: 'reddy',
//   age: '27',
// });

function initialData(){
  return{
    firstName: 'sodham',
      lastName: 'reddy',
      age: '27',
  };
}
  const [data, setData] = useState(initialData);


  const chnageFirstname = () => {
    setData({
      ...data,
      firstName:"srikanth",
        }

    );
  }
  
  const changelastName = () =>{
    setData({
      ...data,
      lastName:"test"
    })
  }


  return (
    <div>
      <h1>My Firstname is {data.firstName}</h1>
      <button onClick={chnageFirstname}>Change first Name</button>
      <h1>My Lastname is {data.lastName}</h1>
      <button onClick={changelastName}>Change first Name</button>
      <h1>My Age is {data.age}</h1>
    </div>
  )
}

export default Index;
