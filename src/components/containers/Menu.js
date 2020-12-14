import {connect} from "react-redux";
import Menu from "../views/Menu/Menu";
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


const Container = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default Container;