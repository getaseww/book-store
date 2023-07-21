import { FETCHPRODUCTFAILURE,FETCHPRODUCTSUCCESS,FETCHPRODUCTREQUEST } from "../actions/productActions";

const initialState={
    products:[],
    pending:false,
    message:null,
}

const productReducer=(state=initialState,action)=>{

    switch(action.type){
        case FETCHPRODUCTREQUEST:
            return {
                ...state,
                pending:true,
            }
        case FETCHPRODUCTSUCCESS:
            return {
                ...state,
                products:action.payload,
            }
        case FETCHPRODUCTFAILURE:
            return {
                ...state,
                message:action.payload,
            }
        default:
            return state;
    }
}

export default productReducer;