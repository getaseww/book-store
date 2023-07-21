export const INCEREMENT='INCEREMENT';
export const DECEREMENT='DECEREMENT';

export const increment=()=>{
    return {
        type:INCEREMENT,
    }
}

export const decrement=()=>{
    return {
        type:DECEREMENT,
    }
}

