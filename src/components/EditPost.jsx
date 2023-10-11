// EditPostForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../Redux/Slice';

function EditPost({ postId, initialTitle, initialContent }) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const dispatch = useDispatch();

  const handleUpdatePost = () => {
    dispatch(updatePost({ postId, title, content }))
      .unwrap()
      .then((updatedPost) => {

      });
  }

  return (
    <div>
      <h2>Edit Post</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleUpdatePost}>Save</button>
    </div>
  );
}

export default EditPost;
