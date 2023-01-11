import React, { useState } from 'react';

function Signup({addUser}) {

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


    return(
        <div>
            <form onSubmit={submitNewUser}>
                <p style={{color: 'red'}}>{error ? error : null}</p>
                <h2>New User Sign Up</h2>
                <input type='text' onChange={addFirstName} value={firstName} placeholder="Enter First Name"/>
                <br></br>
                <input type='text' onChange={addLastName} value={lastName} placeholder="Enter Last Name" />
                <br></br>
                <input type='text' onChange={addUsername} value={username} placeholder="Enter Username"/>
                <br></br>
                <input type='text' onChange={addEmail} value={email} placeholder="Enter Email"/>
                <br></br>
                <input type='password' onChange={addPassword} value={password} placeholder="Enter Password"/>
                <br></br>
                <input type='submit' value='Signup' />
            </form>
        </div>
    )
}

export default Signup;