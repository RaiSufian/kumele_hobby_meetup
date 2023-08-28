import './App.css';
import HeroPage from './pages/heropage';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Blogs from './pages/blogs';
import BlogDetail from './pages/blogDetail';
import Notification from './pages/notification';
import Shop from './pages/shop';
import ChatRoom from './pages/chatroom';
import Statistics from './pages/Statistics';
import CreateEvent from './pages/createEvent';

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
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/history&statistics" element={<Statistics />} />
        <Route path="/create/event" element={<CreateEvent />} />
      </Routes>

    </>
  );
}

export default App;
