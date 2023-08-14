import styles from  "./todo.module.css";

const Todo = ({ fetchData, todos}) => {
  return (
    <div className={styles["todo__container"]}>
        <p className="mb-7">Enter a number ID to view related todos:</p>
        <input
          className={styles["todo__input"]}
          type="number" 
          placeholder="Enter a number" 
          onChange={e => fetchData(e.target.value)} 
        />
        <ul className={styles["todo__list"]}>
          {todos.map((todo, i) => (
            <li className={styles["todo__list-item"]} key={i} >
              {i + 1} {todo.title} - <span className={styles[todo.completed ? 'todo-completed' : 'todo-not-completed']}>{todo.completed ? 'Completed' : 'Not Completed'}</span>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Todo;