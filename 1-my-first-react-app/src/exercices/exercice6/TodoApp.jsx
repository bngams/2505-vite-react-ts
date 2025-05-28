import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(1);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]); // utiliser le state et le "setter" associé
    };

    const loadTodos = async () => {
        // async
        console.log('avant le fetch');
        try { 
        const response = await fetch('https://dummyjson.com/todos?limit=10')
        const json = await response.json();
        setTodos(json.todos);
        } catch(error){
            console.error('Erreur lors du chargement des todos:', error);
            // setError ...
        } finally {
            console.log('fin du chargement');
            setLoading(0);
        }
    }

    useEffect(() => {
       console.log('avant le loadTodos');
       if(loading) loadTodos();
       console.log('apres le loadTodos');
    }, []);

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo onSubmit={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoApp;
