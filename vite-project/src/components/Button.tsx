type Button = {
    type: "button" | "submit" | "reset" | undefined,
    name: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    disabled: boolean
}

export default function Button({ type, name, onClick, disabled }: Button) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    )
}