import React, { useEffect, useState } from "react";
import './TodoList.css';
import { randomUUID } from "crypto";

type TodoEntry = {
    id: number;
    title: string;
    description?: string;
}

type TodoListProps = {

}

function validateResponse(response: Response) {
    if (response.status !== 200) { throw new Error('response is not ok'); }
    return response.json();
}

function createResponseHeader(body: Object): RequestInit {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        },
        body: JSON.stringify(body)
    }
}

export const TodoList = (props: TodoListProps) => {
    let [todoList, setTodoList] = useState<TodoEntry[]>([])
    let [addElementVal, setAddElementVal] = useState<string>('')

    useEffect(() => {
        fetch('http://localhost:8080/todoList', createResponseHeader({}))
        .then(validateResponse).then((response) => {
            if (response) {
                setTodoList(response);
            }
        }).catch((error) => {
            console.log('Error adding element', error);
        });
    }, []);

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAddElementVal(event.target.value);
    }

    function onElementAdd(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (addElementVal && addElementVal.length > 0) {
            fetch('http://localhost:8080/todoAdd', createResponseHeader({
                    title: addElementVal,
            }))
            .then(validateResponse)
            .then((response) => {
                if (response) {
                    setTodoList([...todoList, response]);
                    setAddElementVal('');
                    console.log(response);
                }
            })
            .catch((error) => {
                console.log('Error adding element', error);
            });
        }
    }

    function onElementRemove(event: React.ChangeEvent<HTMLElement>) {
        const id = parseInt(event.target.id, 10);
        fetch('http://localhost:8080/todoRemove', createResponseHeader({
            id: id,
        }))
        .then((response) => {
            if (response.status !== 200) { throw new Error('response is not ok'); }
            return response;
        })
        .then((response) => {
            setTodoList(todoList.filter((val) => val.id !== id));
            setAddElementVal('');
        })
        .catch((error) => {
            console.log('Error removing element', error);
        });
    }

    return (<>
        <form onSubmit={onElementAdd} className="addTodoForm">
            <input type="text" className="addElementToTodoList" onChange={onInputChange} value={addElementVal} />
            <button type="submit" name="addTodo">Add</button>
        </form>
        <ul className="todoItems">
            {todoList.map((element) => { 
                return <li key={'' + element.id}>
                    <input type="checkbox" id={'' + element.id} onChange={onElementRemove} />
                    <label htmlFor={'' + element.id}>{element.title}</label>
                </li>
            })}
        </ul>
    </>)
}
