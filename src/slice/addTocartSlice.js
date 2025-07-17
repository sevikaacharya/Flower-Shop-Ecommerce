import { createSlice } from '@reduxjs/toolkit'
const initialState={
    items:[]                 //array to hold all items in the cart

};

export const addTocartSlice=createSlice({
    name:'itemsInCart',
    initialState,
    reducers:{
        addIncart:(state,action)=>
        {
            const{title,img,price,id,product}=action.payload;
            const unitprice = price;
            const total = unitprice * product;
            state.items.push({
                title,
                img,
                id,
                product,
                unitprice,
                price:total
            });
        },
        removeItem:(state,action)=>
        {
            const id=action.payload.id;
            state.items=state.items.filter((item=>item.id!==id));
        },
        handleTotalde:(state,action)=>
        {
            const foundItem=state.items.find(item=>item.id===action.payload.id);
            if(foundItem && foundItem.product>1)
            {
                foundItem.product=foundItem.product-1;  
                foundItem.price=foundItem.product*foundItem.unitprice;
            }
             

        },
        handleTotalIn:(state,action)=>
        {
            const foundItem=state.items.find(item=>item.id===action.payload.id);
            if(foundItem)
            {
                foundItem.product=foundItem.product+1;  
                foundItem.price=foundItem.product*foundItem.unitprice;
            }
             

        }
    }
})
export const {addIncart,handleTotalde,handleTotalIn,removeItem}=addTocartSlice.actions;
export default addTocartSlice.reducer;