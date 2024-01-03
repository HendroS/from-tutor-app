import { createSlice } from "@reduxjs/toolkit";

type Cart = {
    id: number,
    qty: number
}
const cart:Cart[] = JSON.parse(localStorage.getItem('cart')||"")||[]

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // data: JSON.parse(localStorage.getItem('cart')||"")||[]
        data:cart
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(
                (item:any)=> item.id ===action.payload.id
            )
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload)
            }
        },
    }
})


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;