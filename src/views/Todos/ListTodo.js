import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo.js";
import {toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: '1', title: 'Doing homeworks' },
            { id: '2', title: 'Making Videos' }
        ],
        editTodo:{}
    }

    addNewTodo = (todo) => {
        // let currentTodo = this.state.ListTodos;
        // currentTodo.push(todo);
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
            // ListTodos: currentJob;
        })
        toast.success('Added successfully')
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            ListTodos: currentTodos
        })
        toast.success('Deleted successfully')
    }

    handleEditTodo = (todo) => {
        let { editTodo , ListTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        //save 
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [ ...ListTodos ]
            
            let todoIndex = listTodosCopy.findIndex((item => item.id === todo.id))

            listTodosCopy[todoIndex].title = editTodo.title; //todo.title

            // ListTodos = listTodosCopy;// gia tri chi trong pham vi ham handleEditTodo
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Saved successfully")
            return;

        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEditTodo = (valueInputOfTodo) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = valueInputOfTodo.target.value;
        this.setState({
            editTodo: editTodoCopy 
        })
    }

    render() {
        let { ListTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        return (
            <>
                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                    Simple Todo App with basic React
                </p>
            
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo = {this.addNewTodo}
                    />
                    
                    <div className="list-todo-content">
                        {ListTodos && ListTodos.length > 0 &&
                            ListTodos.map((item, index)=>{
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }



                                        
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save'
                                                : 
                                                'Edit'
                                            }
                                        </button>
                                        <button className="del"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })
                        }
                        
                    
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;