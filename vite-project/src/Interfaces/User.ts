import Task from "./Task";

export default interface User {
    name: string,
    email: string,
    password: string,
    tasks: Array<Task>
}