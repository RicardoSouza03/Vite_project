import ListComponent from "../components/List";
import NewTask from "../components/NewTask";
import "../Css/List.css"

export default function List() {


  return (
    <main className="list_main">
        <NewTask />
        <ListComponent />
    </main>
  )
}