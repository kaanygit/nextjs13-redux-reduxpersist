import { INPUT_VALUE_TYPES } from "./value.types";



export const incrementValue=()=>({
    type:INPUT_VALUE_TYPES.SET_INCREMENT_VALUE,
    payload:+1
})

export const decrementValue=()=>({
    type:INPUT_VALUE_TYPES.SET_DECREMENT_VALUE,
    payload:-1
});

export const resetValue=()=>({
    type:INPUT_VALUE_TYPES.SET_RESET_VALUE,
    payload:0
})