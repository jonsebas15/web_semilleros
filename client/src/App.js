
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal"
import NavBar from './components/NavBar'
import Semillero1 from "./components/Semillero1";
import Login from "./components/Login"; 
import Register from "./components/Register"
export default function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/'element={<Principal />} />
        <Route path='/semillero1'element={<Semillero1 />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}
