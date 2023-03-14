import { createContext,useContext} from "react";
import { Task } from "../Task/Task.jsx";
import {globalContext} from "../Content/Content.jsx";
import "./list.css";

export const callbackContext = createContext(function () {});


export function List() {
    const context = useContext(globalContext);
    const taskList = [...context.taskList];
    
    return (
        <div className="menu">
            <callbackContext.Provider value={context.handleComplete}>
                {taskList.map(e => (
                    <Task key={e.id} id={e.id} title={e.title} description={e.description}/>
                ))}
            </callbackContext.Provider>
        </div>
    );
}
