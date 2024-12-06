
import Paper from '@mui/material/Paper';
import { Typography,TextField,Button} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login =()=>{
    const[user,setUser]=useState({"email":"","password":""});
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    const handleChange=(event)=>{
      if(event.target.name==='email'){
        setUser({...user,email:event.target.value});
      }
      if(event.target.name==='password'){
      setUser({...user, password:event.target.value});
      }
     }
     const handleclick=()=>{
      if(user.email==='admin@gmail.com' && user.password==='admin'){
        navigate('/home')
      }
      else if(user.email==='' && user.password===''){
        setError('Please fill all file')
      }
      else{
        setError('Invalid email and password')
      }
     }
const handleLogin=()=>{
  axios.post('http://localhost:3001/login',JSON.stringify(user),{headers:{"Content-Type":"application/json"}}) 
   .then((res)=>{console.log(res.data)})
  .catch((err)=>{console.log(err)})
}

    return(
        <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundImage:"url('https://www.homeskitchen.in/assets/images/bg1.jpg')",backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
<Paper sx={{width:'370px',height:'470px',padding:'20px',backgroundColor:'whitesmoke',filter:'brightness(88%)',border:'1px solid black',gap:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} elevation={3} >
  <Typography variant='h5'>Sign In</Typography>
  <TextField  id="outlined-basic" label="Email" variant="outlined"  name='email' onChange={(event)=>handleChange(event)} fullWidth/>
  <TextField id="outlined-basic" label="Password" variant="outlined"  name='password' onChange={(event)=>handleChange(event)} fullWidth/>
  <Button  sx={{backgroundColor:'red'}} onClick={handleclick} variant="contained">Login</Button>
  {error && <Typography>{error}</Typography>}
  <a href='/register' style={{color:'black'}}>Don't have an account? Register</a>
  
</Paper>

  </div>
    );
}
export default Login;