import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/UseFirebase';
//import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
//import CircularProgress from '@mui/material/CircularProgress';
//import Alert from '@mui/material/Alert';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {signIn, users,signInUsingGoogle}=useFirebase()
    //const [welcome,setWelcome]=useState(false)
    //console.log(user)
    const location = useLocation()
    const history = useHistory()

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
       // const {users}=useFirebase()
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        signIn(loginData.email, loginData.password, location, history)
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {email:users.email })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }

    const handleGoggleSignIn=()=>{
        signInUsingGoogle(location,history)
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {email:users.email })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className='login'>
                
                <div className='text-center text-dark'><h4>WELCOME TO COMPLAIN-BOX</h4></div>
            
            <div className='col-md-3 m-auto border border-primary bg-dark text-light p-5'>
                    <p className='text-center mt-5'>Log-in</p>
                    <form onSubmit={handleLogInSubmit}>
                        <label>Email</label>
                        <input  name="email" className='form-control' type="email" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" label="Your Email"  />
                        <label>Password</label>
                        < input name="password" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" type="password" label="Your Password" className='form-control' />
                    <br/>
                        <button className='form-control btn btn-success' type="submit" >LOGIN</button>

                        <Link to="/register">  <Button color="inherit">NEW USER? Create New Account</Button> </Link>
                      
                        {/* <p>---------------------</p> */}
                        <button className='btn btn-warning form-control' onClick={handleGoggleSignIn}>Login With Google</button>

                    </form>


                </div>

           
        </div>
    );
};

export default Login;
