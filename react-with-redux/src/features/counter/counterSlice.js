import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },
    reducers : {
        increment : (state) => {
            state.value = state.value + 1;
        },
        decrement : (state) => {
            state.value = state.value - 1;
        },
        incrementAsync : (state) => {
            setTimeout(() => {state.value = state.value + 10}, 3000)
        },
        decrementAsync : (state) => {
            setTimeout(() => {state.value = state.value - 10}, 3000)
        }
    }
});

export const { increment, decrement, incrementAsync, decrementAsync } = counterSlice.actions;
export default counterSlice.reducer;