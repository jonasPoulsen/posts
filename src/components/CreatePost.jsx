import { useState } from 'react';
import '../styles/CreatePost.css';

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

                <h3 className='CreatePost-header'>Create a new post here</h3>
                <h4 className='CreatePost-title-header'>Post title</h4>
                <input
                className='CreatePost-title-input'
                    type="text"
                    id="post-title"
                    name="post-title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={postTitle}
                    placeholder="Post title"
                />

                <h4 className='CreatePost-body-header'>Post body</h4>
                <textarea
                    className='CreatePost-body-input'
                    type="textarea"
                    id="post-body"
                    name="post-body"
                    onChange={(e) => setBody(e.target.value)}
                    value={postBody}
                    placeholder="Post body"
                />

                <div>
                    <button 
                        className='CreatePost-submit'
                        onClick={(e) => addPost(postTitle, postBody)}
                    >Submit this post</button>
                </div>

            </div>            
        );
    }
};

export default CreatePost;