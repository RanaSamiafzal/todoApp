import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
  };
  
  const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      setTodos: (state, action) => {
        state.todos = action.payload;
      },
      addTodo: (state, action) => {
        // ✅ Now the payload already includes id, text, completed
        state.todos.push(action.payload);
      },
      toggleTodo: (state, action) => {
        const todo = state.todos.find((t) => t.id === action.payload);
        if (todo) todo.completed = !todo.completed;
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter((t) => t.id !== action.payload);
      },
    },
  });
  
  export const { setTodos, addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
  export default todoSlice.reducer;
  


