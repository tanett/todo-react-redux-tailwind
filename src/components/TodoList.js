import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo}) => {
    return (

        <ul className="flex flex-col xs500:flex-wrap xs:flex-nowrap gap-1 h-4/6 xs:overflow-auto xs500:overflow-hidden">
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
            ))}
        </ul>


    )
}

export default TodoList
