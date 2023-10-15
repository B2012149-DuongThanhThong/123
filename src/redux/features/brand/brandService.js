import api from "../../../utils/api";

const getBrands = async () =>{
    // const response = await axios.get(API_URL);
    const response = api.get('/brands');

    return response;
}


const brandService = {
    getBrands,
}

export  default brandService;