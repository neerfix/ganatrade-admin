import {connect} from "react-redux";
import ProfileSettings from "../views/ProfileSettings";
import {pushRoute} from "../../redux/actions/PushRoute.action";
import {updateProfile} from "../../redux/actions/UpdateProfile.action";

const mapDispatchToProps = {
    pushRoute,
    updateProfile
};

const mapStateToProps = state =>
    ({
        fetchLogin: state.fetchLogin,
        statusLogin: state.statusLogin,
        userSession: state.userSession
    });

const Container = connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
export default Container;