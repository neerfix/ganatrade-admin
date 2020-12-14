import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history'
import checkAuth from "../../middlewares/CheckAuth";
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    return createStore(
        rootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
                // Remove checkAuth during front dev
                checkAuth(history),
                thunk
            ),
        )
    )
}
// let store = createStore(rootReducer(), applyMiddleware(thunk));