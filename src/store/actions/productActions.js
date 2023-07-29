import axios from "axios";

export const FETCHPRODUCTREQUEST='FETCHPRODUCTREQUEST';
export const FETCHPRODUCTSUCCESS='FETCHPRODUCTSUCCESS';
export const FETCHPRODUCTFAILURE='FETCHPRODUCTFAILURE';


export const fetchProductRequest=()=>{
    return {
        type:FETCHPRODUCTREQUEST,
    }
}

export const fetchProductSuccess=(products)=>{
    return {
        type:FETCHPRODUCTSUCCESS,
        payload:products,
    }
}


export const fetchProductFailure=(error)=>{
    return {
        type:FETCHPRODUCTFAILURE,
        payload:error,
    }
}


export const fetchProducts=()=>{
    return (dispatch)=>{
        dispatch(fetchProductRequest);
        axios.get('https://dummyjson.com/products/')
        .then((res)=>{
            const products=res.data.products;
            dispatch(fetchProductSuccess(products));
        })
        .catch((error)=>{
            dispatch(fetchProductFailure(error));
        })
    }
}