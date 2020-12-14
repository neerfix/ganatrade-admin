import C from "../../tools/Constants";

export const UpdateProfile = (updateProfile = C.WAIT_UPDATE_PROFILE, action = {}) =>{
    switch (action.type){
        case C.SUCCESS_UPDATE_PROFILE :
            return C.SUCCESS_UPDATE_PROFILE;
        case C.ERROR_UPDATE_PROFILE:
            return C.ERROR_UPDATE_PROFILE;
        default:
            return updateProfile
    }
};