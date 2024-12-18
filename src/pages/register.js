import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
 import { Typography, TextField, Button } from '@mui/material'; 
 import { useNavigate } from 'react-router-dom'; 
 const Register = () => { 
  const [user, setUser] = useState({ name: 'asha', email: 'asha1@gmail.com', password: '1234', number: '123456' }); 
  const [error, setError] = useState('');
   const navigate = useNavigate(); const handleChange = (event) => {
     const { name, value } = event.target; setUser((prevUser) => ({ ...prevUser, [name]: value })); };
      const handleRegister = () => { 
        console.log(user); 
        if (user.name && user.email && user.password && user.number) { 
        // Perform your registration logic here 
        navigate('/home'); 
      } 
      else { 
        setError('Please fill all fields'); 
        }
         };
          return ( 
          <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: "url('https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg?semt=ais_hybrid')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}> 
          <Paper sx={{ width: '370px', height: '470px', backgroundColor: 'transparent', backdropFilter: 'blur(3px)', border: '1px solid black', padding: '20px', gap: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={3}>
             <Typography variant='h5'>Register</Typography>
              <TextField id="outlined-basic" label="Name" variant="outlined" name='name' onChange={handleChange} fullWidth /> <TextField id="outlined-basic" label="Email" variant="outlined" name='email' onChange={handleChange} fullWidth /> 
              <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type='password' onChange={handleChange} fullWidth /> 
              <TextField id="outlined-basic" label="Mobile Number" variant="outlined" name='number' onChange={handleChange} fullWidth /> 
              <Button sx={{ backgroundColor: 'red' }} onClick={handleRegister} variant="contained">Register</Button> 
              {error && <Typography color='error'>{error}</Typography>} 
              <a href='/login' style={{ color: 'black' }}>Already have an account? Login</a> </Paper> 
              </div> 
              ); 
            };
            
export default Register;