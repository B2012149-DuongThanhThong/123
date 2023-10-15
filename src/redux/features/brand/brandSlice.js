import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import brandService from "./brandService"




const initialState = {
    brands:[
      
    ],
    // cart:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
}

export const getBrands = createAsyncThunk(
    '/brands',
    async () =>{
        try {
            return await brandService.getBrands();
            // const phone = await productService.getProducts().
            // console.log('phone', phone);
            // return phone;
        } catch (error) {
            console.log('Error: ',error);
        }
    }
)

export const brandSilce = createSlice({
    name:"brand",
    initialState,
    reducers:{
    },
    extraReducers: (builder) =>{
        builder
            .addCase(getBrands.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getBrands.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.brands= action.payload?.data || [];
            })
            .addCase(getBrands.rejected,(state)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.brands= [];
            })
    }
})

export default brandSilce.reducer;