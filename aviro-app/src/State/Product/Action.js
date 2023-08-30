import {api} from "../../config/apiConfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_SUCCESS } from "./ActionType";


    export const findProducts=(reqData)=>async(dispatch)=>{
        dispatch({type:FIND_PRODUCTS_REQUEST});
    const{capacity,category,pageNumber,pageSize}=reqData;

    try{
        const {data}=api.get(`/api/products/capacity=${capacity}&category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}

export const findProductById=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCTS_BY_ID_REQUEST});
const{productId}=reqData;

try{
    const {data}=api.get(`/api/products/id/${productId}`)

    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
}catch(error){
    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
}
}
