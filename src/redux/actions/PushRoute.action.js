import C from "../../tools/Constants";
import {push} from "connected-react-router";

export const pushRoute = (path, statusLogin) => dispatch => {
    console.log(path);
    if(statusLogin === C.DISCONNECT){
        dispatch(push("/login"));
    }
    else{
        dispatch(push(path));
    }
};