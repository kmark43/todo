import React, { useState } from "react";
import './TodoList.css';
import { randomUUID } from "crypto";

type TodoEntry = {
    id: string;
    title: string;
}

type TodoListProps = {

}

export const TodoList = (props: TodoListProps) => {
    let [todoList, setTodoList] = useState<TodoEntry[]>([])
    let [addElementVal, setAddElementVal] = useState<string>('')

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAddElementVal(event.target.value);
    }

    function onElementAdd(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (addElementVal && addElementVal.length > 0) {
            setTodoList([...todoList, {
                id: crypto.randomUUID(),
                title: addElementVal,
            }]);
            setAddElementVal('');
        }
    }

    function onElementRemove(event: React.ChangeEvent<HTMLElement>) {
        const id = event.target.id;
        setTodoList(todoList.filter((val) => val.id !== id));
    }

    return (<>
        <form onSubmit={onElementAdd} className="addTodoForm">
            <input type="text" className="addElementToTodoList" onChange={onInputChange} value={addElementVal} />
            <button type="submit" name="addTodo">Add</button>
        </form>
        <ul className="todoItems">
            {todoList.map((element) => { 
                return <li key={element.id}>
                    <input type="checkbox" id={element.id} onChange={onElementRemove} />
                    <label htmlFor={element.id}>{element.title}</label>
                </li>
            })}
        </ul>
    </>)
}
