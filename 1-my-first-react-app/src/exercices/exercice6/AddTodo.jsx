import { useState } from "react";

function AddTodo({onSubmit}) {
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
      console.log(event);
      setTodo(event.target.value); // value from event input
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('value from state: ', todo);
        console.log('value from html form: ', event.target.todo.value);
        onSubmit({
            id: Math.random(),
            todo: todo,
            completed: false,
            userId: 1
        });
    };

    return (
        <>
            <h2>Formulaire tâche</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" value={todo} onChange={handleChange} />
                <button type="submit">Ajouter</button>
            </form>
        </>
    );
}

export default AddTodo;