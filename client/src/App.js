import './App.css';
import React, { useState, useEffect } from 'react'
import {Route, useLocation, useNavigate } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'
import Home from './Home.js'
import Stocks from './Stocks.js'
import Crypto from './Crypto.js'
import MarketRelatedNews from './MarketRelatedNews';
import FinancialTerms from './FinancialTerms';
import DiscussionBoard from './DiscussionBoard';
import Login from './Login.js';
import Signup from './Signup.js';
import Header from './Header.js';


function App() {

  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
    .then(response => {
      if (response.ok) {
        response.json()
    .then(data => {
      setUser(data)
      })
      }
    })
  },[])

  const handleLogout = () => {
    setUser({})
    fetch("/logout", {
      method: "DELETE"
    })
    alert("You have been logged out")
    navigate("/")
  }

  function addUser(newUser) {
    fetch('/signup', {
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => setUser([data]))
  }

    useEffect(() => {
      fetch('/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  function addPost(newPost) {
    fetch('/posts', {
      method: 'POST',
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
  }

  const location = useLocation();

  return (
    <div className="App">
      <Header handleLogout={handleLogout}/>
      <SlideRoutes location={location} duration={400}>
        <Route path="/" element={<Home exact/>} />
        <Route path="/Stocks" element={<Stocks/>} />
        <Route path="/Crypto" element={<Crypto/>} />
        <Route path="/MarketRelatedNews" element={<MarketRelatedNews/>} />
        <Route path="/FinancialTerms" element={<FinancialTerms/>} />
        <Route path="/DiscussionBoard" element={<DiscussionBoard addPost={addPost} user={user} posts={posts}/>} />
        <Route path="/Login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="/Signup" element={<Signup addUser={addUser}/>} />
      </SlideRoutes>
    </div>
  );
}

export default App;
