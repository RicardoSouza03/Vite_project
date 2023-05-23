import Task from "../Interfaces/Task";
import UserStore from "../zustand/UserStore/UserStore";
import Button from "../components/Button";

export default function ListComponent() {
    const taskList = UserStore((state) => state.tasks)
    const removeTask = UserStore((state) => state.removeTask)    

    return (
        <section>
            {taskList.map((task: Task) => (
                <section className="task_section" key={task.id}>
                <div className="task_base_info">
                    <h3>{task.name}</h3>
                    <span>{task.created}</span>
                </div>
                <div className="task_info">
                    <p>{task.description}</p>
                    <Button
                    name="Excluir"
                    onClick={() => removeTask(task.id)}
                    key={task.id}
                    disabled={false}
                    type="button"
                    />
                </div>
                </section>
            ))}
        </section>
    )
}