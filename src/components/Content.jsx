import { useState } from 'react';
import '../styles/Content.css';
import Inputs from './Inputs';
import Posts from './Posts';
import CreatePost from './CreatePost';

function Content() {

    // userId is sent to the Post component to update the data call everytime a new user is set.
    const [userId, setUserId] = useState( localStorage.getItem("Userid") );
    const updateUserId = (userId) => {
        setUserId(userId);

        // extraPosts is connected to a user - Clear the array when new user is set.
        setThePost([]);
    };

    const [extraPosts, setThePost] = useState([]);
    const updatePostList = (data) => {
        setThePost([...extraPosts, data]);
    }

    return(
        <div className='Content'>


            <div className="ContentForm">            
                <Inputs updateUserId={updateUserId} />
                <CreatePost userId={userId} updatePostList={updatePostList}/>
            </div>
            <div className="ContentList">            
                <Posts userId={userId} extraPosts={extraPosts} />
            </div>
        </div>
    );

};

export default Content;