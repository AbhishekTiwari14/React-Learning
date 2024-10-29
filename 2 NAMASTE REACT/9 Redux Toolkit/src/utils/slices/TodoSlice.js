import { createSlice, nanoid } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{
            id: nanoid(),
            task: 'This is test task',
        }],
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                task: action.payload,
            }
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos.filter((todo) => todo.id !== action.id)
        },
        updateTodo: () => {},
    }
})

export const {addTodo, deleteTodo, updateTodo} = TodoSlice.actions

export default TodoSlice.reducer