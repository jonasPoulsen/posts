//Content.jsx

//import React, { useState } from 'react';
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
    };

    return(
        <div className='Content'>
            <div className="ContentForm">            
                <Inputs updateUserId={updateUserId} />
                <CreatePost userId={userId}/>
            </div>
            <div className="ContentList">            
                <Posts userId={userId}/>
            </div>
        </div>
    );

};

export default Content;