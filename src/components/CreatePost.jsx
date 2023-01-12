//CreatePost.jsx

import { useState } from 'react';
//import '../styles/Content.css';

function CreatePost({userId, updatePostList}) {

    const [postTitle, setTitle] = useState('');
    const [postBody, setBody] = useState('');

    const addPost = async (title, body) => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
           method: 'POST',
           body: JSON.stringify({
              title: title,
              body: body,
              userId: userId,
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((response) => response.json())
           .then((data) => {

              // Set new id because api always returns 101 - Id should be uniqe (in list rendering Posts.jsx)
              data.id = Date.now();
              setTitle('');
              setBody('');
              updatePostList(data)
           })
           .catch((err) => {
              console.log(err.message);
           });
     };

    // This part is only rendered if it's able to connect the created post to a user.
    if (userId) {


        return (
            <div className='CreatePost'>

<br />
<br />
<br />

                <h3>Create a new post here</h3>
                <div>                
                    <h5>Post title</h5>
                </div>
                <input
                    type="text"
                    id="post-title"
                    name="post-title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={postTitle}
                    placeholder="Post title"
                />
<br />
<br />
                <div>
                    <h5>Post body</h5>
                    <button>add ai</button>
                </div>                
                <textarea
                    type="textarea"
                    id="post-body"
                    name="post-body"
                    onChange={(e) => setBody(e.target.value)}
                    value={postBody}
                    placeholder="Post body"
                />
                <br />
                <br />
                <br />        
                <div>
                    <button onClick={(e) => addPost(postTitle, postBody)}>Submit this post</button>
                </div>

            </div>            
        );
    }
};

export default CreatePost;