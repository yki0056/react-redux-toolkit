import {createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

// asyncThunk 사용방법 -  createAstnThunk('이름', async함수)
// createAstnThunk는 비동기 작업을 처리하는 액션을 만들어줌
export const getProducts = createAsyncThunk('fetchProductData', async(url, {getState})=>{
    // console.log(getState()) // {counter: {…}, cart: [{...}], product: {productData: Array(0), status: 'loading'} // 현재 리듀서안 모든 정보
    const resp = await fetch(url)
    const data = await resp.json();
    return data
})

const productSlice = createSlice({
    name:'producttt',
    initialState:{
        productData: [],
        status: null,
    },
    // extraReducer는 함수 
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getProducts.fulfilled, (state, action) => { // action은 getProducts에서 얻은 데이타 
            state.status = 'success'
            if(state.productData.length < 1) {
                state.productData.push(...action.payload)
            } 
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.status = 'failed'
        })
    },
})
// console.log(productSlice) // {actions:{}, getInitialState:f{}, name:"producttt", reducer: f}
export default productSlice.reducer