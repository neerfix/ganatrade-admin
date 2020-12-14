import C from "../../tools/Constants";

export const Push = (push = '/', action = {}) =>{
    switch (action.type){
        case C.PUSH :
            return action.payload;
        default:
            return push;
    }
};