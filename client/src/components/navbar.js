import React, { useState } from 'react';

export const Navbar = () => {

    const [post , setPost] = useState({
        url : "",
        author : "",
        description : "",
        title : ""
    })

    async function postHandler() {
        const sendPost = await fetch("https://banao-nodejs.onrender.com/api/post/add", {
            method : "POST",
            body : post
        })
        const data = await sendPost.json()
        alert(JSON.stringify(data))
    }


    function PostForm() {
        const [close , setClose] = useState(true)

        return(
            <form className={`post-form ${close ? "close" : ""}`}>
                <p>Enter Title</p>
                <input 
                type='text' 
                placeholder='title'
                name='title'
                />
                <p>Enter URL</p>
                <input 
                type='text' 
                placeholder='url'
                name='url'
                />
                <p>Enter description</p>
                <textarea
                placeholder='description'
                name='description'></textarea>
                <button className='post-submit'>submit</button>
                <button className='post-submit' onClick={
                    () => setClose(true)
                }>close</button>
            </form>
        )
    }

    return (
        <nav> 
            <header>Media Posts</header>
            <div className="user-profile">
            <PostForm/>
            </div>
            <button className='addpost' onClick={postHandler} >create post</button>
        </nav>
    );
};

export default Navbar;