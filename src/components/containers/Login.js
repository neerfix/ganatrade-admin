import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import Login from '../views/Login';
import {disconnect} from "../../redux/actions/Disconnect.action";
import {pushRoute} from "../../redux/actions/PushRoute.action";
import {onLogin} from "../../redux/actions/OnLogin.action";

const mapDispatchToProps = {
        onLogin,
        disconnect,
        pushRoute
};

const mapStateToProps = state =>
    ({
        fetchLogin: state.fetchLogin,
        statusLogin: state.statusLogin,
        userSession: state.userSession,
    });

const Container = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(Container);