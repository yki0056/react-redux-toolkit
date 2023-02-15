import {createSlice} from '@reduxjs/toolkit'; 
// 새로운 redux toolkit 방식
// createSlice - 작은 store을 만듬
// configureStore - createSlice 모아서 store을 만들때 사용
// 보통 createSlice들과 configureStore들은 각각 다른 페이지에 만들고 export, import를 사용해서 합침

const counterSlice = createSlice({
    name:'cts',
    initialState:{value: 0},
    reducers:{
        up:(state, action) => { 
            state.value = state.value + action.payload;
        },
        down:(state, action) => {
            state.value = state.value - action.payload;
        }
    }
})

export default counterSlice
// 이런식으로도 수출가능 
export const {up} = counterSlice.actions;
