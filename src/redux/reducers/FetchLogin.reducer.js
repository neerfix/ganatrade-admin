import C from "../../tools/Constants";

export const FetchLogin = (fetchLogin = false, action = {}) =>{
    switch (action.type){
        case C.FETCH_LOGIN :
            return true;
        case C.SUCCESS_LOGIN:
            return false;
        case C.FAIL_LOGIN:
            return false;
        default:
            return fetchLogin
    }
};