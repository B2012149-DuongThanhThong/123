// import axios from "axios";
import api from "../../../utils/api";


const page = 1;
const limit = 100;

const getProducts = async () =>{
    // const response = await axios.get(API_URL);
    const response = api.get('/phones',{
        params:{
            page,
            limit
        }
    });

    return response;
}

const getProduct = async () =>{
    const response = api.get('/phones/:p')
}

const productService = {
    getProducts,
}

export  default productService;