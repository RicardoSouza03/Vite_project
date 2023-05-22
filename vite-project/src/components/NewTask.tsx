import { useState } from "react"
import Task from "../Interfaces/Task"
import UserStore from "../zustand/UserStore/UserStore"
import Button from "./Button"
import { Form, Field } from "react-final-form";

export default function NewTask() {
    const addTask = UserStore((state) => state.addTask)
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')


    const createTask = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        const newTask: Task = {
            name: name as string,
            description: description as string,
            created: new Date().toLocaleDateString()
        }
        addTask(newTask)
        setName(''), setDescription('')
    }

    const validateForm = () => {
        const errors = {name: '', description: ''}
        if (!name) {
            errors.name = 'Necessário'
        }
        if (name.length < 1) {
            errors.name = 'Muito curto'
        }
        if (!description) {
            errors.description = 'Necessário'
        }
        if (description && description.length < 4) {
            errors.description = 'Muito curto'
        }
        return errors
    }

    return (
        <section>
            <Form 
                onSubmit={createTask}
                validate={validateForm}
                render={({handleSubmit, submitting}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="name">
                            {({ input, meta }) => (
                                <div>
                                    <label>Nome: </label>
                                    <input 
                                        type="text" 
                                        {...input}
                                        placeholder="Digite um nome"
                                        name="name"
                                        onChange={(event) => setName(event.target.value)}
                                        value={name}
                                    />
                                    { meta.touched && meta.error && <span>{meta.error}</span> }
                                </div>
                            )}
                        </Field>
                        <Field name="description">
                            {({ input, meta }) => (
                                <div>
                                    <label>Descrição: </label>
                                    <input 
                                        type="text" 
                                        {...input}
                                        placeholder="Descreva-a aqui"
                                        name="description"
                                        onChange={(event) => setDescription(event.target.value)}
                                        value={description}
                                    />
                                    { meta.touched && meta.error && <span>{meta.error}</span> }
                                </div>
                            )}
                        </Field>
                        <Button 
                            disabled={submitting}
                            name="Adicionar"
                            onClick={(event) => createTask(event)}
                            type="submit"
                        />
                    </form>
                )}
            />
        </section>
    )
}

{/* <Input 
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
            /> */}