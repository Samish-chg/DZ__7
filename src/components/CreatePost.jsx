// CreatePostForm.js

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, setStatus} from '../Redux/Slice';

function CreatePost() {
    const { createPostStatus } = useSelector(state => state.slice)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleCreatePost = () => {
        dispatch(createPost({ title, body }))
    }

    useEffect(() => {
        if (createPostStatus) {
            setTitle('')
            setBody('')
            dispatch(setStatus(''))
        }
    }, [createPostStatus])

    return (
        <div>
            <h2>Create a New Post</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
            <button onClick={handleCreatePost}>Create</button>
        </div>
    );
}

export default CreatePost;
