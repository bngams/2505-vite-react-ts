import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import type { Todo } from "./Todo";

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (newTodo: Todo): void => {
        setTodos([...todos, newTodo]); // utiliser le state et le "setter" associé
    };

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo submitFn={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoApp;