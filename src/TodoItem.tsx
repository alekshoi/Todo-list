import { Todo } from "./types"

type Props = {
    todo: Todo
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
    const { completed, title, id } = todo;
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {title}
            </label>
            <button className="btnDelete" onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </li>
    )


}