import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import User from "../../Interfaces/User";
import Task from "../../Interfaces/Task";

interface UserStore extends User {
    setName: (name: string) => void,
    setEmail: (email: string) => void,
    setPassword: (password: string) => void,
    addTask: (task: Task) => void,
}

const UserStore = create<UserStore>()(
    devtools(
        persist(
            (set) => ({
                name: '',
                email: '',
                password: '',
                tasks: [],
                setName: (name: string) => set(() => ({ name: name })),
                setEmail: (email: string) => set(() => ({ email: email })),
                setPassword: (password: string) => set(() => ({ password: password })),
                addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
            }),
            {
                name: 'userStore'
            }
        )
    )
)

export default UserStore