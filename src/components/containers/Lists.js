import {connect} from "react-redux";
import Lists from "../views/Lists/Lists";
import {pushRoute} from "../../redux/actions/PushRoute.action";

const mapDispatchToProps = {
    pushRoute
};

const mapStateToProps = state =>
    ({
        fetchLogin: state.fetchLogin,
        statusLogin: state.statusLogin,
        userSession: state.userSession
    });

const Container = connect(mapStateToProps, mapDispatchToProps)(Lists);
export default Container;