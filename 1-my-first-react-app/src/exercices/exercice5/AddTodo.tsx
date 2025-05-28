import { useState } from "react";
import type { Todo } from "./Todo";

function AddTodo({submitFn} : {submitFn: (todo: Todo ) => void}) {
    const [todo, setTodo] = useState("");

    const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
      console.log(event);
      setTodo((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('value from state: ', todo);
        submitFn({
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