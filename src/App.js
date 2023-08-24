import './App.css';
import HeroPage from './pages/heropage';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>

    </>
  );
}

export default App;
