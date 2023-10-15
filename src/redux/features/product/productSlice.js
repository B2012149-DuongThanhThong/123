import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productService from "./productService"




const initialState = {
    phones:[
      
    ],
    cart:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
}

export const getProducts = createAsyncThunk(
    '/phones',
    async () =>{
        try {
            return await productService.getProducts();
            // const phone = await productService.getProducts().
            // console.log('phone', phone);
            // return phone;
        } catch (error) {
            console.log('Error: ',error);
        }
    }
)

export const productSilce = createSlice({
    name:"product",
    initialState,
    reducers:{
    },
    extraReducers: (builder) =>{
        builder
            .addCase(getProducts.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.phones= action.payload?.data.result.phones || [];
            })
            .addCase(getProducts.rejected,(state)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.phones = [];
            })
    }
})

export default productSilce.reducer;