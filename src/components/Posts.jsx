//Posts.jsx

import { useState, useEffect } from 'react';
//import '../styles/Content.css';

function Posts({userId, extraPosts}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [userId]);
        
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h5 className="post-title">{post.title}</h5>
                        <p className="post-body">{post.body}</p>
                    </div>
                );
            })}

            {extraPosts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h5 className="post-title">{post.title}</h5>
                        <p className="post-body">{post.body}</p>
                    </div>
                );
            })}

        </div>            
    );
};

export default Posts;