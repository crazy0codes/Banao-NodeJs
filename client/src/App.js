import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Post } from './components/posts';
import Navbar from './components/navbar';
import { useState } from 'react';

function App() {
  const [postList, setPostList] = useState([])

  async function loadPosts() {
    const postRes = await fetch('http://localhost:4000/api/post/')
  }

  loadPosts()

  return (
    <>
    <Navbar/>
    <Login/>
    <Post/> 
    </>
  );
}

export default App;
