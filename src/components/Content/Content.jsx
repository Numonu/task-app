import { useState , createContext} from "react";
import {Storage} from "../../Storage.js"
import "./content.css";

const dataExample = [
    { id: 0, title: "example task", description: "Hello World!" },
];

export const globalContext = createContext({});

//load on storage
const storageDataRaw = Object.values(localStorage);
const storageData = storageDataRaw.map(e => JSON.parse(e));


export function Content({children}){
    const [taskList, setTaskList] = useState([...storageData]);//use storage

    function handleComplete(id) {

        Storage.deleteToStorage(id);

        setTaskList(taskList.filter((e) => e.id != id));
    }
    function handleCreate(){

        const generateId = Math.floor(Math.random() * 300);
        const newTask = {id: generateId , title:"Title Example" , description:"Description example..."};

        Storage.addToStorage(newTask);

        setTaskList([
            ...taskList,
            newTask
        ]);
    }

    return <div className="content">
        <div className="wrapper">
            <globalContext.Provider value={{handleComplete , taskList , handleCreate}}>
                {children}
            </globalContext.Provider>
        </div>
    </div>
}