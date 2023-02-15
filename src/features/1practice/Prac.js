// 공부주소  https://blog.webudding.com/react-query-vs-rtk-query-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%84%9C%EB%B2%84-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-cb80aa413d60

// ----이곳이 app.js라고 생각하고 -기본설정방법 과 옛날것과 비교------
// import {createStore, combineReducers} from 'redux';
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

/* 옛 redux 방식
const initialState = {value:0};
function exampleReducer1(state = initialState, action){
    let {type, payload} = action; 
    switch(type){
        case "NUMBER_UP":
            return {}
        default:
            return {...state}
    }
}
const allReducers = combineReducers({
    ctr: exampleReducer1,
    log: exampleReducer2, 
})

store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk))); 
*/
import { useSelector, useDispatch, Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'; 
import counterSlice from './slice1.js'
// console.log(counterSlice) // {name: 'cts', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
const upp = counterSlice.actions.up

const store = configureStore({
    reducer: {
        counter1: counterSlice.reducer
    }
})

export default function Prac() {
    return (
        <div style={{border:'1px solid green'}}> 
            practice폴더 
            <Provider store={store}>
                <div>
                    <Counting></Counting>
                </div>
            </Provider>
        </div>
    )
}

function Counting(){
    const dispatch = useDispatch();
    const count = useSelector(state => { // {counter1: {value: 0}}
        return state.counter1.value // 0
    });
    return (
        <div>
            <button style={{margin: '10px'}} onClick={()=>{
                    // dispatch({type:'NUMBER_UP', payload:2})  // 옛버전방식
                    dispatch(upp(2))  // 새로운방식 
                }}>+plus</button>
            <button style={{margin: '10px'}} onClick={()=>{dispatch(counterSlice.actions.down(2))}}>+minus</button>
            {count}
        </div>
    )
}

