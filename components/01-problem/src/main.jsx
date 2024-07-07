import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


function App() {
    return <h1>Hello React </h1>
}

