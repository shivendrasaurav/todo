import React, { Fragment, useState, useEffect } from "react";
import Edit from "./EditComp";

const List = () =>{

        const [todos, setTodos] = useState ([]);

        const deleteTodo = async id => {
            try {
                const deleteTodo = await fetch(`/todos/${id}`, {
                    method: "DELETE"
                });

                setTodos(todos.filter(todo => todo.todo_id !== id));
            } catch (error) {
                console.error(error);
            }
        }

        const getTodos = async () => {
            try {
                const response = await fetch("/todos")
                const jsonData = await response.json();

                setTodos(jsonData);
            } catch (error) {
                console.error(error);
            }
        }

        useEffect(() => {
            getTodos();
        }, []);

        return(
            <Fragment>
                <br /><br />
                <div className="table_container column large12 medium12 small12">  
                    <table style={{width: "100%"}}>  
                        <thead>  
                        <tr>  
                            <th class="primary_blue" style={{minWidth: "500px;"}}>Description</th>  
                            <th class="primary_blue">Edit</th>  
                            <th class="primary_blue">Delete</th>
                        </tr>  
                        </thead>  
                        <tbody>  
                        {todos.map(todo =>(
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><Edit todo={todo}/></td>
                                <td><button className="primary_red" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>  
                    </table>  
                </div>
            </Fragment>
        );
}

export default List;