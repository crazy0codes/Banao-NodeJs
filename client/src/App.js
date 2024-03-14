import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Post } from './components/posts';
import Navbar from './components/navbar';
import { useState } from 'react';

function App() {
  const [postList, setPostList] = useState([])

  async function loadPosts() {
    const postRes = await fetch('http://banao-nodejs.onrender.com/api/post',{
      method : "GET"
    })
    const data = await postRes.json()
    console.log(data)
  }

  loadPosts()

  return (
    <>
    <Navbar/>
    <Login/>

    </>
  );
}

export default App;
