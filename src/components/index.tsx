import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.hydrate(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);