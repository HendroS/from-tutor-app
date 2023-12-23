// import toolkit from '@reduxjs/toolkit'
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

//core redux
// 1.reducer   ===> state,action
// 2.store   ====> wadahnya
// 3.subscribe =====>lookup changes
//4.dispatch  =====> run action


// const initialState = {
//     cart:[]
// }

const addToCart = createAction('ADD_TO_CART')
const login = createAction('CREATE_SESSION')
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    });
});

const loginReducer = createReducer({status:false}, (builder) => {
    builder.addCase(login, (state) => {
        state.status=true
    })
    
})

const store = configureStore(
    {
        reducer: {
            login:loginReducer,
            cart: cartReducer,
        }
    });

console.log('oncreate: ',store.getState())
store.subscribe(() => {
    console.log("store changed: ",store.getState())
})

store.dispatch(login())
store.dispatch(addToCart({id:1,qty:20}))
store.dispatch(addToCart({id:2,qty:22}))