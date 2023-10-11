

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Form} from "react-router-dom";
import {act} from "react-dom/test-utils";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', async () => {
        try {
            const response = await axios.get('https://dummyjson.com/posts');
            console.log(response.data.posts)
            return response.data.posts
        }
        catch (e) {
            console.log(e)
        }
});

export const createPost = createAsyncThunk(
    'posts/createPost', async ({ title, body }) => {
        try {
            const form = new FormData
            form.append('title', title)
            form.append('body', body)

            const response = await axios.post('https://dummyjson.com/posts/add', form);
            console.log(response)
            if (response.status >= 200 && response.status <= 204) return response.data;
        }
        catch (e) {
            console.log(e)
        }
})

// export const updatePost = createAsyncThunk('posts/updatePost', async ({ postId, title, content }) => {
//     try {
//         const response = await axios.put(`https://dummyjson.com/auth/posts/${postId}`, { title, content });
//         return response.data;
//     } catch (error) {
//         console.error("Ошибка при обновлении поста:", error);
//         throw error;
//     }
// });


const Slice = createSlice({
    name: 'Slice',
    initialState: {
        data: [],
        loading: 'idle',
        error: null ,
        createPostStatus: null
    },
    reducers: {
        setStatus: (state, action) => {
            state.createPostStatus = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.error.message;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.createPostStatus = action.payload
            })
    },
});


export const { setStatus } = Slice.actions
export default Slice.reducer



