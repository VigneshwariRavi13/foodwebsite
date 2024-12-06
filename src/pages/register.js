import Paper from '@mui/material/Paper';
import { Typography,TextField,Button} from '@mui/material';
import { useState } from 'react';


const Register = () =>{
    const[user,setUser]=useState({"email":"","password":""});
    console.log(user);
    const handleChange=(event)=>{
      if(event.target.name==='name'){
        setUser({...user,email:event.target.value});
      }
      if(event.target.name==='email'){
        setUser({...user,email:event.target.value});
      }
      if(event.target.name==='password'){
      setUser({...user, password:event.target.value});
      }
      if(event.target.name==='number'){
      setUser({...user, password:event.target.value});
    }}
//Register page
return(
    <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundImage:"url('https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg?semt=ais_hybrid')",backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
    <Paper sx={{width:'370px',height:'470px',backgroundColor:'transparent',backdropFilter:'blur(3px)',border:'1px solid black',padding:'20px',gap:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} elevation={3} >
      <Typography variant='h5'>Signin</Typography>
      <TextField id="outlined-basic"  label="Name" variant="outlined" name='name' onChange={(event)=>handleChange(event)} fullWidth/>
      <TextField id="outlined-basic"  label="Email" variant="outlined" name='email' onChange={(event)=>handleChange(event)} fullWidth/>
      <TextField id="outlined-basic" label="Password" variant="outlined" name='password' onChange={(event)=>handleChange(event)} fullWidth/>
     <TextField id="outlined-basic" label="Mobile Number" variant="outlined" name='number' onChange={(event)=>handleChange(event)} fullWidth/>
      <Button href='/home' sx={{backgroundColor:'red'}} onClick={('clicked')} variant="contained">Register</Button>
    
      <a href='/login' style={{color:'black'}}>Already have an account? Login</a>
      
    </Paper>
    
      </div>
)
}
export default Register;