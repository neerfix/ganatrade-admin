import {connect} from "react-redux";
import Tasks from "../views/Lists/Tasks";
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

const Container = connect(mapStateToProps, mapDispatchToProps)(Tasks);
export default Container;