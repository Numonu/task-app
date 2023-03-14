import { useContext } from "react";
import { globalContext } from "../Content/Content.jsx";
import "./header.css";

export function Header(){

    const context = useContext(globalContext);

    return <div className="header">
        <h1 className="header__title">Task App</h1>
        <p className="header__description">
            Task app create with React , source code in my <a href="https://github.com/Numonu" className="header__link">Github</a>
        </p>
        <button className="header__add" onClick={() => context.handleCreate()}>Add Task</button>
    </div>
}