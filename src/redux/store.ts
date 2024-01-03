import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'

const store = configureStore({
    reducer:{cart:cartReducer}
})
console.log('oncreate: ', store.getState())

store.subscribe(() => console.log("store changed: ", store.getState()))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;