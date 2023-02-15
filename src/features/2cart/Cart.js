import { useSelector, useDispatch } from 'react-redux';
import {add, remove, update} from './cartSlice';
import {useState} from 'react';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state)=>{
        return state.cart
    });
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [itemIndex, setItemIndex] = useState(null);
    const [selectedList, setSelectedList] = useState(null);
    
    const addFunc = (e) => {
        e.preventDefault()
        let addItem = {name:nameValue, age:ageValue};
        dispatch(add(addItem))
        setNameValue('')
        setAgeValue('')
    }
    const removeFunc = (e)=>{
        e.preventDefault();
        dispatch(remove(selectedList))
    }
    const updateFunc = (e) => {
        e.preventDefault();
        let updateItem = {name:nameValue, age:ageValue, index:itemIndex};
        dispatch(update(updateItem))
    }
    const clickItem = (e, c, i) => {
        setSelectedList(c)
        const allItems = e.currentTarget.parentElement.children;
        for(let i=0; i<allItems.length; i++){
            allItems[i].style = 'border:1px solid black';
        }
        e.currentTarget.style = 'border:1px solid red';
        setNameValue(c.name);
        setAgeValue(c.age);
        setItemIndex(i)
    }

    return (
        <div style={{border:'1px solid blue', margin:'20px 0'}}>
            <h1>Cart</h1>
            
            <form>
                <label htmlFor="">
                    name
                    <input type="text" value={nameValue} onChange={(e)=>{setNameValue(e.target.value)}}/>
                </label>
                <label htmlFor="">
                    age
                    <input type="text" value={ageValue} onChange={(e)=>{setAgeValue(e.target.value)}}/>
                </label>
                <button onClick={addFunc}>add</button>
                <button onClick={removeFunc}>remove</button>
                <button onClick={updateFunc}>update</button>
            </form>

            <div>
                {cart.map((c,i)=>
                    <div key={i} onClick={(e)=>{clickItem(e,c, i)}} style={{border:'1px solid black'}}> 
                        <h3>{c.name}</h3>
                        <h3>{c.age}</h3>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Cart