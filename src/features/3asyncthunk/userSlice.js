import {createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

// asyncThunk 사용방법 
export const getUsers = createAsyncThunk('fetchUserData', async(url, {getState})=>{
    // console.log(getState()) // {counter: {…}, cart: [{...}], user: {userData: Array(0), status: 'loading'}, product: {productData: Array(0), status: null}
    const resp = await fetch(url)
    const data = await resp.json();
    return data
})

const userSlice = createSlice({
    name:'userrr',
    initialState:{
        userData: [],
        status: null,
    },
    // 비동기 작업을 할때는 extraReducer을 사용!!!   
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            // console.log(action) // {type: 'fetchingItem2/fulfilled', payload: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}], meta: {arg: 'https://fakestoreapi.com/users', requestId: 'ULzoN3JF3-0SvINPCDjg4', requestStatus: 'fulfilled'}}
            state.status = 'success'
            if(state.userData.length < 1) {
                state.userData.push(...action.payload)
            } 
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.status = 'failed'
        })
    },

})

export default userSlice.reducer