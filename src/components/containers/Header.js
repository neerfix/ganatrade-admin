import {connect} from "react-redux";
import Header from "../views/Header/Header";
import {pushRoute} from "../../redux/actions/PushRoute.action";

const mapDispatchToProps = {
        pushRoute
    };

const mapStateToProps = state =>
    ({
        fetchLogin: state.fetchLogin,
        statusLogin: state.statusLogin,
        userSession: state.userSession,
    });


const Container = connect(mapStateToProps, mapDispatchToProps)(Header);
export default Container;