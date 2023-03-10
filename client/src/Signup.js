import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signup({ addUser }) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function clearForm() {
        setFirstName('')
        setLastName('')
        setUsername('')
        setEmail('')
        setPassword('')
    }

    function addFirstName(e) {
        setFirstName(e.target.value)
    }
    function addLastName(e) {
        setLastName(e.target.value)
    }
    function addUsername(e) {
        setUsername(e.target.value)
    }
    function addEmail(e) {
        setEmail(e.target.value)
    }
    function addPassword(e) {
        setPassword(e.target.value)
    }

    function submitNewUser(e) {
        e.preventDefault()
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password
        }
        addUser(newUser)
        clearForm()
    }


    return (
        <div>
            <img className="login_image_div" src={'https://img.freepik.com/premium-photo/digital-stock-market-forex-trading-graph-candlestick-chart-suitable-financial-investment-financial-investment-trends-business-background-concept_24070-1039.jpg?w=2000'} alt='signup_image' />
            <div className="signup_container">
            <p style={{ color: 'red' }}>{error ? error : null}</p>
            <form className="signup_form" onSubmit={submitNewUser}>
                <br></br>
                <h2 className="login_header">New User Sign Up</h2>
                <TextField sx={{ m: 1, background: "white" }} label="First Name" type='text' size="small" onChange={addFirstName} value={firstName} required />
                <br></br>
                <TextField sx={{ m: 1, background: "white" }} label="Last Name" type='text' size="small" onChange={addLastName} value={lastName} placeholder="Enter Last Name" required />
                <br></br>
                <TextField sx={{ m: 1, background: "white" }} label="Username" type='text' size="small" onChange={addUsername} value={username} placeholder="Enter Username" required />
                <br></br>
                <TextField sx={{ m: 1, background: "white" }} label="Email" type='text' size="small" onChange={addEmail} value={email} placeholder="Enter Email" required />
                <br></br>
                <TextField sx={{ m: 1, background: "white" }} label="Password" type='password' size="small" onChange={addPassword} value={password} placeholder="Enter Password" required />
                <br></br>
                <Button sx={{ m: 0.5, p: 1, backgroundColor: "none", borderColor: 'white' }} variant='contained' size="large" color="success" type='submit' value='Signup'>Sign Up</Button>
            </form>
            </div>
        </div>
    )
}

export default Signup;