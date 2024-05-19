
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/principal"
import NavBar from './components/NavBar'
export default function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/'element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}
