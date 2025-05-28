import { useState } from "react";

type TodoFormData = { todo: string };   

function AddTodo() {
    // state per field
    const [todo, setTodo] = useState("");

    // global state form data
    const [formData, setFormData] = useState<TodoFormData>({ todo: "" });

    // specific state for errors (or in a form state including formData, etc..)
    const [errors, setErrors] = useState<string[]>([]);

    // how to choose beetween global state or simple state?
    // https://react.dev/learn/choosing-the-state-structure

    const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
      console.log(event.target);
      // TODO: handle debouncing according to treatments
      setTodo((event.target as HTMLInputElement).value);
      setFormData({
        ...formData,
        todo: (event.target as HTMLInputElement).value,
      });
    };

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: handle the form validation
        if(todo.trim() === "") {
            setErrors([...errors, "Le champ ne peut pas être vide"]);
            return;
        }
        // ...

        // 3 strategies
        // 1. Using the state
        console.log('value from state: ', todo);
        console.log('value from formData: ', formData.todo);
        // 2. Querying the DOM
        const todoInput = document.querySelector('input[name="todo"]');
        console.log('todoInput fro DOM: ', todoInput);
        // 3. Using the event target        
        console.log('value from html form: ', (event.target as HTMLFormElement));
    };

    return (
        <>
            {errors.length > 0 && (
                <ul>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" value={todo} onChange={handleChange}/>
                <button type="submit">Ajouter</button>
            </form>
        </>
    );
}

export default AddTodo;