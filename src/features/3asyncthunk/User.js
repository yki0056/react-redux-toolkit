import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';

// 각 컴포넌트에서 직수입해온 asyncthunk함수
import {getUsers} from './userSlice.js'
import {getProducts} from './productSlice.js'

function User() {
    const dispatch = useDispatch();
    const status = useSelector(state => {
        //console.log(state) // {counter: [{…}], cart: Array(1), product: {productData:[{...}], status:'sucess'} user:{userData:Array(0)}, status:'sucess'} 
        return state.product.status;
    })
    const productList = useSelector(state => {
        const jack = state.product.productData.map((x,i) => <div key={i}>{x.title}</div>)
        return jack
    })
    const userArray = useSelector((state)=>{
        return state.user.userData
    })
    const productFunc = () => {  
            dispatch(getProducts('https://fakestoreapi.com/products'))
    }
    useEffect(()=>{
        // dispatch(getUsers('https://fakestoreapi.com/users')) // <-- 계속하면 안되니 // 해놓음
    },[])

    return (
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
            <div style={{border:'1px solid green'}}>
                <h1>useSelector사용해서 product 정보 얻기</h1>
                <button onClick={productFunc}>get product info222</button>
                {productList} --- {status} 
            </div>
            <div style={{border:'1px solid green'}}>
                <h1>useEffect, useSelector사용해서 user 정보 얻기</h1>
                <div>
                    {userArray.map((ua,i)=>{
                        return (
                            <div key={i}>{ua.username}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default User