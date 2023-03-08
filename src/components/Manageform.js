import React, { useState } from 'react'

const Manageform = () => {

    let [fullName,setfullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    })

    function fetchNames(e){
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target.placeholder);
        console.log(e.target.type);

        // const value = e.target.value
        // const name = e.target.name
        // console.log(fullName);

        const {value,name} = e.target

        setfullName((preValue) => {
            console.log(preValue);

            return{
                ...preValue,
                [name] : value,
            }
            // if (name === "fname") {
            //     console.log(preValue.lname);
            //     return{
            //     fname:value,
            //     lname:preValue.lname,
            //     }
            // } else if(name === "lname"){
            //     console.log(preValue.fname);
            //     return{
            //         fname:preValue.fname,
            //         lname:value,
            //     }
            // }
            // else if(name === "myEmail"){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:value,
            //     }
            // }
            // else if(name === "phone"){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:value,
            //     }
            // }
        })

    }
    
    function onSubmits(e) {
        e.preventDefault()
        alert("form submitted")
    }

    const a = ["a","b","c","d"]
    const b = ["e","f","g","h"]

    let alpha = [...a,...b]
    console.log(alpha);

    var [first,...remaining] = a
    console.log(first);
    console.log(...remaining);

    // const Address={
    //     city: "Ahemdabad",
    //     State: "Gujarat",
    //     Country: "India"
    // }

    // const biodata = {
    //     id : "1",
    //     ...Address,
    //     age: "21",
    //     gender: "Male"
    // }

    // console.log(biodata);


  return (
    <div>
    <form onSubmit={onSubmits}>
      <h1>Hello {fullName.fname}</h1>
      <h3>Last Name is: {fullName.lname}</h3>
      <h3>Email is: {fullName.email}</h3>
      <h3>Phone Number is: {fullName.phone}</h3>
      <input type="text" placeholder='Enter First Name' name='fname' onChange={fetchNames} value={fullName.fname}/>
      <br></br>
      <input type="text" placeholder='Enter Last Name' name='lname' onChange={fetchNames} value={fullName.lname}/>
      <br></br>
      <input type="email" placeholder='Enter Email' name='myEmail' onChange={fetchNames} value={fullName.email} autoComplete="off"/>
      <br></br>
      <input type="text" placeholder='Enter Phone Number' name='phone' onChange={fetchNames} value={fullName.phone} autoComplete="off"/>
      <br></br>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Manageform
