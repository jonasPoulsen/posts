//CreatePost.jsx

import { useState } from 'react';
//import '../styles/Content.css';

function CreatePost({userId}) {

    //const [posts, setPosts] = useState([]);

    const [postTitle, setTitle] = useState('');
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const [postBody, setBody] = useState('');
    const handleBodyChange = (event) => {
        setBody(event.target.value);
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
                    <button>add ai</button>
                </div>
                <input
                    type="text"
                    id="post-title"
                    name="post-title"
                    onChange={handleTitleChange}
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
                    onChange={handleBodyChange}
                    value={postBody}
                    placeholder="Post body"
                />

            </div>            
        );
    }
};

export default CreatePost;