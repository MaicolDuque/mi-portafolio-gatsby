import React, { useEffect } from 'react'
import { useState } from 'react';
import Posts from './Posts';
import Post from './Post';

export default (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const data = sessionStorage.getItem("posts");
    if(data){
     setPosts(JSON.parse(data)) 
    }

    let myPosts;
    async function getMediumPosts(){
      const response  = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40maicolduque01")
      myPosts         = await response.json();
      sessionStorage.setItem("posts", JSON.stringify(myPosts.items))
      setPosts(myPosts.items)
    }
    
    getMediumPosts();
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <Posts
        data={posts} 
        card={Post} 
        title="Mis publicaciones en Medium"        
      />
    </div>

  );
}