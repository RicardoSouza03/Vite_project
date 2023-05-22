type InputProps = {
    type: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeHolder: string,
    name: string,
    value: (string | undefined)
};

export default function Input ({type, name, onChange, placeHolder, value}: InputProps) {
    return (
        <div>
            <span>{name}</span>
            <input 
                type={type}
                onChange={onChange}
                placeholder={placeHolder}
                value={value} 
            />
        </div>
    )
}
