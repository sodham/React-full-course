import React, {useState} from 'react';

const Index = () => {
    const [firstName, setFirstName]= useState("Sodham");
    const [email, setemail]= useState("ds@gmail.com");
    const [password, setpassword]= useState("");

    const changeFirstName = (e) =>{
        console.log(e.target.value);
        setFirstName(e.target.value);
    }

    const changeEmail = (e) =>{
        console.log(e.target.value);
        setemail(e.target.value);
    }
    const changePassword= (e) =>{
        console.log(e.target.value);
        setemail(e.target.value);
    }


  return (
    <div>

    <form>
       
<input type="text" name="firstname" id="firstname"  placeholder="enter your name" value={firstName} onChange={changeFirstName}></input>
<input type="email" name="email" id="email" value={email} placeholder="enter your email" onChange={changeEmail}></input>
<input type="password" name="password" id="password" value={password}  placeholder="enter your password" onChange={changePassword}></input>
<button type="submit">Submit</button>
</form>
    </div>

    
  );
};

export default Index;
