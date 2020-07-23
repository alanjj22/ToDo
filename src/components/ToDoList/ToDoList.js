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

    removeItem = (event) => {
        var array = this.state.store;
        array.splice(event,1);
        this.setState({
            store: array
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
                        <li key={index}>{ data }<i onClick={ () => this.removeItem(index)} className="fa fa-trash"></i></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDoList;
