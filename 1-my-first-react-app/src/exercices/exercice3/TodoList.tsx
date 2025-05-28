
function TodoList() {

    const todos = [
      { id: 1, todo: "Faire une bonne action", completed: false, userId: 152 },
      { id: 2, todo: "Lire un chapitre de livre", completed: true, userId: 42 },
      { id: 3, todo: "Aller faire du sport", completed: false, userId: 99 }
    ];

    return (
        <div>
            <h2>Liste des tâches</h2>
            <ul>
                {todos.length === 0 ? (
                    <p>Liste vide</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.todo}</li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;