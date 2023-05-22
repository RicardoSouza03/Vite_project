import Task from '../Interfaces/Task'
import NewTask from '../components/NewTask'
import UserStore from '../zustand/UserStore/UserStore'

export default function List() {
  const taskList = UserStore((state) => state.tasks)

  return (
    <main>
      <NewTask />
      {taskList.map((task: Task) => (
        <div key={task.name}>
          <h3>{task.name}</h3>
          <span>{task.created}</span>
          <p>{task.description}</p>
        </div>
      ))}
    </main>
  )
}