/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [                    //Todo is an array of objects where each object stores info about a task
        {
            id: 1,
            todo: "Mention Task Here",
            completed: false
        }
    ],
    addTodo: (todo) => {},  //fxn. to add new task
    updateTodo: (id, todo) => {}, //fxn. to udate task 
    deleteTodo: (id) => {}, //fxn. to delete a task
    toggleComplete: (id) => {} //fxn. to draw line-through when a task is marked complete
}); 

export const useTodo = () => {
    useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;