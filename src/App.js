import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Post from "./component/post/Post";
import Dashboard from "./component/pages/Dashboard";
import Login from "./component/pages/Login";
import LogOut from "./component/pages/LogOut";
import Search from "./component/pages/Search";
function App() {
  let isLogged = true;
  let data = {
    "st":"user not logged in"
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:category" element={<Post/>}/>
          <Route path="/post/:category/:id" element={<Post/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<LogOut/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/dashboard" element={isLogged?<Dashboard/>:<Navigate to="/login" replace state={data}/>}/>
          
          <Route path="*" element={<h2>Page not found</h2>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
