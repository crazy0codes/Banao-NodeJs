import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Post } from './components/posts';
import Navbar from './components/navbar';
import { useState } from 'react';

function App() {
  const [postList, setPostList] = useState([])

  async function loadPosts() {
    const postRes = await fetch('https://banao-nodejs.onrender.com/api/post')
    const data = await postRes.json()
    setPostList(data)
  }


  return (
    <>
    <Navbar/>
    <Login/>
    {postList.map(obj => <Post props={obj}/>)}
    </>
  );
}

export default App;
