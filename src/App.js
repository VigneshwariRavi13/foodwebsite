
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Menu from './pages/menu';
import Order from './pages/order';
import Review from './pages/review';
import Contact from './pages/contact';
function App() {
  /*const users=["Alice","Tony","Asha","Akash"]*/
 
  return (
 // <div>
   // <h1>hello</h1>
   
   // {users.map((user)=>( <Card name={user}/>))}

  //</div>
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Login />} /> {/* Default route */}
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/order" element={<Order/>}/>
  <Route path="/review" element={<Review/>}/>
  <Route path="/contact" element={<Contact/>}/>
 </Routes>


 </BrowserRouter>

  
  );
}
export default App;
