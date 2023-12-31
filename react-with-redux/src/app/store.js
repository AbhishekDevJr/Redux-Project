import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import counterSlice from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        counter: counterSlice,
    }
});