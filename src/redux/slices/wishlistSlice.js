import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"whishlsit",
    initialState:[],
    reducers:{
        addToWishlsit:(state,action)=>{

            state.push(action.payload)


        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
}) 


export const { addToWishlsit,removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer