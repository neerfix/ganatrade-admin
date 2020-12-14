import C from "../tools/Constants";

const checkAuth = (history) => store => next => action => {

    const result = next(action);
    let state = store.getState();
    if(history.location.pathname !== "/login"){
        if(state.StatusLogin === C.DISCONNECT){
            // history.push('/login')
        }
    }
    return result;
};

export default checkAuth;
