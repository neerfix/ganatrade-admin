import {connect} from "react-redux";
import Index from "../views/Index/Index";
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

const Container = connect(mapStateToProps, mapDispatchToProps)(Index);
export default Container;