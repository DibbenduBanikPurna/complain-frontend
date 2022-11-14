import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import './Login.css'
import Alert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import useFirebase from '../../../Hooks/UseFirebase';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    console.log(loginData)

    const history = useHistory()

    const { signUp, isLoading,  users } = useFirebase()
    console.log(users)
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)
        //console.log(loginData)

    }
    const handleLogInSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)

        if (loginData.password !== loginData.re_password) {
            alert("Your password did not match!!")
            return;
        }
        signUp(loginData.name, loginData.email, loginData.password, history)
        alert("Register Successfully")
    }
    return (
        
        <div className='bg-dark'>
            
        <div className='row   vh-100'>
            <div className='col-md-4 m-auto border-primary bg-light text-light p-5'>
            <div className='card'>
                <div className='card-body'>
                <p className='text-center'>Register</p>
                {!isLoading && <form onSubmit={handleLogInSubmit}>
                    <TextField name="name" type="text" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" label="Your Name" variant="standard" />
                    <TextField name="email" type="email" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" label="Your Email" variant="standard" />
                    < TextField name="password" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" type="password" label="Your Password" variant="standard" />
                    <TextField name="re_password" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" type="password" label="ReType Your Password" variant="standard" />

                    <button  type="submit" className='btn btn-success form-control'>Register</button>

                    <Link to="/">  <Button color="inherit">ALready Sign Up?PLEASE LOGIN</Button> </Link>
                </form>}
              
                    
                </div>
            </div>
             
                {/* {user.email && <Alert severity="success">User Created Successfully</Alert>}
                {
                    authError && <Alert severity="error">{authError}!</Alert>
                } */}
            </div>

          
        </div>

    </div>
    );
};

export default Register;