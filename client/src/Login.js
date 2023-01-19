import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login({ user, setUser }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    setError('')
                    setUser(data)
                } else if (data.errors) {
                    setError(data.errors)
                }
            })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    if (user && user.id) {
        return (
            <div className="welcome_message">
                <h2>
                    Welcome to Money Mavericks {user.first_name}
                </h2>
            </div>
        )
    }

    return (
        <div>
            <div>
            <img className="login_image_div" src={'https://t3.ftcdn.net/jpg/02/74/91/02/360_F_274910292_Xm3dgmmfMJVFrcjUR1eqJmIC7giRrsTF.jpg'} alt='login_image' />
            </div>
            <p style={{ color: 'red' }}>{error ? error : null}</p>
            <div>
            <form className='login_form' onSubmit={handleLogin}>
                <br></br>
                <h2 className="login_header">User Login:</h2>
                <TextField sx={{ m: 1, backgroundColor: "white" }} label="Username" size="small" type="text" onChange={handleChangeUsername} value={username} placeholder="Please Enter Username" required />
                <br></br>
                <TextField sx={{ m: 1, backgroundColor: "white" }} label="Password" size="small" type="password" onChange={handleChangePassword} value={password} placeholder="Please Enter Password" required />
                <br></br>
                <Button sx={{ m: 0.5, p: 1, backgroundColor: "none", borderColor: 'white' }} size="large" color="success" className="form-button" variant='contained' type="submit">Log In</Button>
            </form>
            </div>
        </div>
    )
}

export default Login;