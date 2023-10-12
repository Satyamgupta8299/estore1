import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    totalItemPrice: 0,
    totalItems: 0,
    totalQuantity: 0
}
const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addCartItem: (state,action)=>
        {
            let item_exits=state.cartItems.find((item)=>item.id===action.payload.id);
            
            if(!item_exits){
                state.cartItems=[...state.cartItems,action.payload];
                state.totalItemPrice=state.totalItemPrice+action.payload.price;
                state.totalQuantity=++state.totalQuantity;
                state.totalItems=++state.totalItems;
            }
        },
        UpdateItemQuantity: (state,action)=>
        {
           let index= action.payload.key;
           if(action.payload.operator==="+"){
              ++state.cartItems[index].quantity;
              state.totalItemPrice=state.totalItemPrice+action.payload.item.price;
              ++state.totalQuantity;
            }
            else{
                if(state.cartItems[index].quantity>1){
                    --state.cartItems[index].quantity;
                    state.totalItemPrice=state.totalItemPrice-action.payload.item.price;
                    --state.totalQuantity;
                }
            }
        },
        deleteCartItem : (state,action)=>
        {
           let filteredCart = state.cartItems.filter((elem)=>{
             return (elem.id!==action.payload.id);
           });
           state.cartItems=filteredCart;
           state.totalItemPrice=state.totalItemPrice-(action.payload.price*action.payload.quantity);
           state.totalQuantity=state.totalQuantity-action.payload.quantity;
           --state.totalItems;
        }
    }
});
export const {addCartItem,UpdateItemQuantity,deleteCartItem}=cartSlice.actions;
export default cartSlice.reducer;