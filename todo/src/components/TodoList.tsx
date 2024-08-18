import { useState } from "react";

type TodoListProps = {

}

export const TodoList = (props: TodoListProps) => {
    let [todoList, setTodoList] = useState<string[]>([])
    let [addElementVal, setAddElementVal] = useState<string>('')

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAddElementVal(event.target.value);
    }

    function onElementAdd(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (addElementVal && addElementVal.length > 0) {
            setTodoList([...todoList, addElementVal]);
            setAddElementVal('');
        }
    }

    return (<>
        <form onSubmit={onElementAdd} className="addTodoForm">
            <input type="text" className="addElementToTodoList" onChange={onInputChange} value={addElementVal} />
            <button type="submit" name="addTodo">Add</button>
        </form>
        <ul>
            {todoList.map((element) => {
                return <li key={element}><input type="checkbox" /><label>{element}</label></li>
            })}
        </ul>
    </>)
}
