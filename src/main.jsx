import React from "react";
import ReactDOM from "react-dom/client";

import "./reset.css";

import { Content } from "./components/Content/Content.jsx";
import { List } from "./components/List/List.jsx";
import { Header } from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Content>
            <Header />
                <List />
        </Content>
    </React.StrictMode>
);
