import './App.css';
import HeroPage from './pages/heropage';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Blogs from './pages/blogs';
import BlogDetail from './pages/blogDetail';
import Notification from './pages/notification';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/user/notificaitons" element={<Notification />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

    </>
  );
}

export default App;
