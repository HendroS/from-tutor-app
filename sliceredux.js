import { configureStore, createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addChart(state, action) {
            state.push(action.payload)
        }
    }
});

const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer,
        }
    });

store.subscribe(() => {
    console.log("store changed: ",store.getState())
})    
store.dispatch(cartSlice.actions.addChart({id:1,qty:200}))
