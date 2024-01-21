import { createSlice } from '@reduxjs/toolkit'
import { addDecimal } from '../../utils/helpers.js'

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : {cartItems:[]}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addToCart: (state,action)=>{

            const item = action.payload;
            const existItem = state.cartItems.find(x=>x._id === item._id);

            if(existItem){
                state.cartItems = state.cartItems.map(x=> x._id === item._id ? item : x);

            }else{
                state.cartItems = [...state.cartItems, item];
            }
        
        //Calculate items price
        state.itemsPrice = addDecimal(state.cartItems.reduce((acc,item)=>Number(acc+ item.price*item.qty),0));

        //Calculate shipping price
        state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10)

        //Calculate tax price
        state.taxPrice = addDecimal(Number((state.itemsPrice + state.shippingPrice)*0.17).toFixed(2));

        //Calculate total price
        state.totalPrice = addDecimal(Number(state.itemsPrice)+ Number(state.shippingPrice) + Number(state.taxPrice));
        localStorage.setItem('cart', JSON.stringify(state));

        }
    }
})

export const {addToCart}  = cartSlice.actions;
export default cartSlice.reducer;