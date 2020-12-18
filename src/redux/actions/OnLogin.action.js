import * as firebase from "firebase";
import {history} from '../store/defaultStore';
import C from "../../tools/Constants";
import routeAPI from "../../tools/routeAPI";

export const onLogin = (login, password) => dispatch => {
    dispatch({type: C.FETCH_LOGIN});
    firebase.auth().signInWithEmailAndPassword(login, password)
        .then(r =>{
            fetch(routeAPI+ "users/" +r.user.uid, {
                    // headers: {'Authorization': token},
                })
                    .then(response => response.json()).then(json => {
                        if(json){
                            if(json.rank){
                                if( json.rank === "admin" || json.rank === "super_admin")
                                history.push('/dashboard');
                                dispatch({ payload: json, type: C.SUCCESS_LOGIN });
                            }else{
                                console.log("Tu n'as pas accès à l'administration");
                                dispatch({type: C.FAIL_LOGIN});
                            }
                        }
                    }).catch(e => {
                        dispatch({type: C.FAIL_LOGIN});
                })
        }
        ).catch(e => { dispatch({ type: C.FAIL_LOGIN, payload: e.message })})
};
