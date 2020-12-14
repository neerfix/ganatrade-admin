import {connect} from "react-redux";
import WeekStatistics from "../views/Index/WeekStatistics";
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


const Container = connect(mapStateToProps, mapDispatchToProps)(WeekStatistics);
export default Container;