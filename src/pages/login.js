
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = () => {
    if (!user.email || !user.password) {
      setError('Please fill all fields');
      return;
    }
    
    axios.post('http://localhost:3001/login', JSON.stringify(user), {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      console.log(res.data);
      setError(''); // Clear error on successful login
      // Perform navigation or any other action here
    })
    .catch((err) => {
      console.log(err);
      setError('Login failed');
    });
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: "url('https://www.homeskitchen.in/assets/images/bg1.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Paper sx={{ width: '370px', height: '470px', padding: '20px', backgroundColor: 'whitesmoke', filter: 'brightness(88%)', border: '1px solid black', gap: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={3} >
        <Typography variant='h5'>Sign In</Typography>
        <TextField id="outlined-basic" label="Email" variant="outlined" name='email' onChange={handleChange} fullWidth />
        <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type="password" onChange={handleChange} fullWidth />
        <Button sx={{ backgroundColor: 'red' }} onClick={handleLogin} variant="contained">Login</Button>
        {error && <Typography color='error'>{error}</Typography>}
        <a href='/register' style={{ color: 'black' }}>Don't have an account? Register</a>
      </Paper>
    </div>
  );
};

export default Login;
