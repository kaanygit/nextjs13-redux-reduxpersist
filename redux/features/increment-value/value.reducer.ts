import { INPUT_VALUE_TYPES } from "./value.types";

interface InitialValueInterface{
    value:number;
}

const initialState:InitialValueInterface={
    value:0
}

const inputValueReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case INPUT_VALUE_TYPES.SET_INCREMENT_VALUE:
            return{
                ...state,
                value:state.value + 1,
            }
        case INPUT_VALUE_TYPES.SET_DECREMENT_VALUE:
            return{
                ...state,
                value:state.value - 1,
            }
        case INPUT_VALUE_TYPES.SET_RESET_VALUE:
            return{
                ...state,
                value:initialState.value
            }
        default :
            return state
    }
};


export default inputValueReducer