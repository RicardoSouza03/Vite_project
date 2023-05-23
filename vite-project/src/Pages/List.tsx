import Task from "../Interfaces/Task";
import NewTask from "../components/NewTask";
import UserStore from "../zustand/UserStore/UserStore";
import "../Css/List.css"

export default function List() {
  const taskList = UserStore((state) => state.tasks)

  return (
    <main className="list_main">
      <NewTask />
      {taskList.map((task: Task) => (
        <section className="task_section" key={task.name}>
          <div className="task_base_info">
            <h3>{task.name}</h3>
            <span>{task.created}</span>
          </div>
          <p>{task.description}</p>
        </section>
      ))}
    </main>
  )
}