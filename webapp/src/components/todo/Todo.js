import './Todo.css';
import React, { useState } from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            formValues: {}
        };
        this.addElement = this.addElement.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }
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

    function addElement(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        elements.push(createElement(elementId++, formData.get('todoAddInput')));
    }

    function render() {
        const todoItems = elements.map((element) => {
            return createElement(element.id, element.description);
        });

        return (
            <>
                <form className="todoAddForm" onSubmit={addElement}>
                    <input id="todoAddInput" name="todoAddInput" type="text" />
                    <button className="todoAddBtn" type="submit">Add</button>
                </form>
                <li className="todo">
                    {todoItems}
                </li>
            </>
        )
    }
}
