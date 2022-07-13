import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 100,
    userData:[]
};

export const testSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
        addIncome: (state, action) => {
            state.value += action.payload
        },
        addData:(state,action)=>{
            state.userData=action.payload
        }
    },
});

// Action creators are generated for each case reducer function
export const { addIncome,addData } = testSlice.actions;

export default testSlice.reducer
