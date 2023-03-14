import { useReducer, useState , useContext} from "react"
import { callbackContext } from "../List/List.jsx";
import { Storage } from "../../Storage.js";
import "./task.css";


function reduceEdit(state , action){
    switch (action.type) {
        case "title":
            return {
                ...state,
                title: action.value
            };
        case "description":
            return {
                ...state,
                description: action.value
            };
    }
}

export function Task({id , title , description}){
    const [state , setState] = useState("read");
    const [document , dispatch] = useReducer(reduceEdit , {
        id,
        title,
        description
    });
    const callback = useContext(callbackContext);

    function handleToggleState(){
        setState(state == "read" ? "write" : "read");
    }
    function handleComplete(){
        callback(document.id);
    }
    function handleSave(){
        Storage.updateToStorage(document);

        handleToggleState();
    }

    return <div className="task">
        <div className="task__header">
            {
                state == "read" ? <div className="task__title">{document.title}</div> : 
                <input type="text" className="task__title-config" placeholder="title here" value={document.title} onChange={e => dispatch({type:"title" , value : e.target.value})}/>
            }
        </div>
        <div className="task__body">
            {
                state == "read" ? 
                <div className="task__description">{document.description}</div> : 
                <textarea autoFocus className="task__description-config" placeholder="description here" value={document.description} onChange={e => dispatch({type:"description" , value : e.target.value})}></textarea>
            }
            <div className="task__actions">
                {state == "read" && <button className="task__complete" onClick={handleComplete}>Complete</button>}
                {
                    state == "read" ? <button className="task__edit" onClick={handleToggleState}>Edit</button> :
                    <button className="task__save" onClick={handleSave}>Save</button>
                }
            </div>
        </div>
    </div>
}   