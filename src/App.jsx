
// react labraries 
import { useState } from 'react';
import MyContext from "./MyContext"
import {BrowserRouter ,Routes , Route} from "react-router-dom"

// Blogs Data
import Data from "./Data.js"

//page
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {



  return (
    <MyContext.Provider value={'sam'}>
   
  <div className="App">
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/blog/:id" element={<Blog/>}/>
  <Route path="/addblog" element={<AddBlog/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/search/:searchTerm" element={<Search/>}/>
  </Routes>
  {/*<Footer/>*/}
  </BrowserRouter>
  </div>
  
    </MyContext.Provider>
  )
}

export default App;
