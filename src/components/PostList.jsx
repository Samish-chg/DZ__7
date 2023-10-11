

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../Redux/Slice';
import slice from "../Redux/Slice.js";

function PostsList() {
    const { data, loading, error } = useSelector((state) => state.slice);
    const dispatch = useDispatch();

    useEffect(() => {
        if (loading === 'idle') {
            dispatch(fetchPosts());
        }
    }, [dispatch, loading]);

    if (loading === 'pending') {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {data && data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;
