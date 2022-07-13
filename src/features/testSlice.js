import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 100,
};

export const testSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
        addIncome: (state, action) => {
            state.value += action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { addIncome } = testSlice.actions;

export default testSlice.reducer
