import { useState } from 'react';

export default function Todo() {
    const [elements, setElements] = useState([]);
    const [formValues, setFormValues] = useState({});
    // text box, add button
    // list
    //  element, x button
    // make element dragable
    let elementId = 0;
    function removeElement(id) {
        setElements(elements.filter((element) => element.id !== id));
    }
    
    function createElement(id, description) {
        return (
            <>
                <li id={id} className="todo-content">
                    {description}
                    <a href="#" className="todo-delete" onClick={removeElement(id)}>X</a>
                </li>
            </>
        )
    }

    function handleTextChange(event) {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    function addElement(event) {
        event.preventDefault();
        return {
            id: elementId++,
            description: formValues['todo-add-input']
        }
    }

    const todoItems = elements.map((element) => {
        return createElement(element.id, element.description);
    });

    return (
        <>
            <form class="todo-header" onSubmit={addElement}>
                <input id="todo-add-input" name="todo-add-input" type="text" onChange={handleTextChange} />
                <button class="todo-add" onClick={addElement}>Add</button>
            </form>
            <li class="todo">
                {todoItems}
            </li>
        </>
    )
}