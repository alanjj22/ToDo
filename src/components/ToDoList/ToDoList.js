import React, { Component } from 'react'
import './ToDoList.css'

class ToDoList extends Component {
    state = {
        input: "",
        store: []
    }

    addTolist = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    storeList = (event) => {
        event.preventDefault();
        const {input} = this.state;

        this.setState({
            store: [...this.state.store,input],
            input: ""
        })
    }
    

    render() {
        const {input, store} = this.state

        return (
            <div className="toDoMain">
                <h1>My ToDo App</h1>
                <div className="input-element">
                    <input type="text" value={this.state.input} onChange={this.addTolist}/>
                    <button onClick={this.storeList}>Add Item</button>
                </div>
                <ul>
                    { store.map((data , index) => (
                        <li key={index}>{ data }<i className="fa fa-trash"></i></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDoList;
