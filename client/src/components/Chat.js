import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import BundledEditor from './TinyMCE';
import './Chat.css'


const Chat = () => {

    return (
        <div className="main-container">
             <p>Talk to AI!</p> 
            <BundledEditor/>
            <p></p>
        </div>

    );
};

export default Chat
