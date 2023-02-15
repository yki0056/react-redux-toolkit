import {createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState:[{name:'matthew', age:'33'}],
    reducers:{
        add: (state, action) => { 
            return [...state, action.payload] // 기존정보에 받아온정보를 넣음
        }, 
        remove: (state, action) => {
            let filtered
            if(action.payload){ // 받아온 정보가 있다면 
                let filtered = state.filter((f)=>{
                    return f.name !== action.payload.name
                })
                return filtered
            }
            return filtered
        },
        update: (state, action)=>{
            state.forEach((s, index)=>{
                if(index === action.payload.index){ // 같은 index넘버일경우 이름과 나이 수정 
                    s.name = action.payload.name
                    s.age = action.payload.age
                }
            })
            
        }
    }
})

export const {add, remove, update} = cartSlice.actions;
// 고정으로 해야하는것
export default cartSlice.reducer;