import { useState } from "react"
import Task from "../Interfaces/Task"
import UserStore from "../zustand/UserStore/UserStore"
import Input from "./Input"
import Button from "./Button"

export default function NewTask() {
    const addTask = UserStore((state) => state.addTask)
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')


    const createTask = () => {
        const newTask: Task = {
            name: name as string,
            description: description as string,
            created: new Date().toLocaleDateString()
        }
        addTask(newTask)
        setName(''), setDescription('')
    }

    return (
        <section>
            <Input 
                type="text"
                name="Nome"
                onChange={(event) => setName(event.target.value)}
                placeHolder="Dê um nome a atividade"
                value={name}
            />
            <Input 
                type="text"
                name="Descrição"
                onChange={(event) => setDescription(event.target.value)}
                placeHolder="Descreva sua atividade"
                value={description}
            />
            <Button 
                onClick={() => createTask()}
                disabled={false}
                name="Criar"
                type="button"
            />
        </section>
    )
}