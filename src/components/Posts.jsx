import { useState, useEffect } from 'react';
import '../styles/Posts.css';

function Posts({userId, extraPosts}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [userId]);
        
    return (
        <div className='Posts'>
            {extraPosts.map((post) => {
                return (
                    <div className="Posts-card" key={post.id}>
                        <h4 className="Posts-title">{post.title}</h4>
                        <p className="Posts-body">{post.body}</p>
                    </div>
                );
            })}
            
            {posts.map((post) => {
                return (
                    <div className="Posts-card" key={post.id}>
                        <h4 className="Posts-title">{post.title}</h4>
                        <p className="Posts-body">{post.body}</p>
                    </div>
                );
            })}

        </div>            
    );
};

export default Posts;