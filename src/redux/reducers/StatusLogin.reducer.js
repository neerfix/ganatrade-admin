import C from "../../tools/Constants";

export const StatusLogin = (statusLogin = C.DISCONNECT, action = {}) =>{
    switch (action.type){
        case C.SUCCESS_LOGIN:
            return C.SUCCESS_LOGIN;
        case C.DISCONNECT:
            return C.DISCONNECT;
        case C.FAIL_LOGIN:
            return C.FAIL_LOGIN;
        default:
            return statusLogin
    }
};