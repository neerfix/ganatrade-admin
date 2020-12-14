import * as firebase from "firebase";
import C from "../../tools/Constants";

export const updateProfile = (email, displayName, phoneNumber) => dispatch => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        phoneNumber: ""+phoneNumber+"",
        displayName: ""+displayName+""
    })
        .then(function() {
            user.updateEmail(""+email+"")
                .then(function(){
                    dispatch({
                        type: C.SUCCESS_UPDATE_PROFILE,
                        message: 'Successfully updated user'
                    });
                })
                .catch(function(error) {
                    dispatch({
                        type: C.ERROR_UPDATE_PROFILE,
                        payload: 'Error updating user:', error
                    });
                });
        })
};