import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import BootstrapCustomeAlertTemplate  from "./components/alerts/BootstrapCustomeAlertTemplate";


import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
    timeout: 5000,
    offset: "30px",
    position: positions.TOP_RIGHT,
    transition: transitions.SCALE,
};

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={BootstrapCustomeAlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,

    document.getElementById("root")
);
