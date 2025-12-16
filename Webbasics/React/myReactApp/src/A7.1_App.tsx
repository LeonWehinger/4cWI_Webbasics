import {useEffect, useState} from "react";
import Todo, {type Props} from "./A7.1_components/Todo.tsx";


export default function A7_1_App() {

    const [todos, setTodos] = useState<Props[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => setTodos(data));
    }, []);


    return (


        <>
            <h1 className="text-3xl flex justify-center m-2">Todo List</h1>
            <div className="border border-black p-2 m-4">
                {todos.map((todo) => (
                    <Todo key={todo.id} title={todo.title} completed={todo.completed}/>
                ))}
            </div>
        </>
    )
}

