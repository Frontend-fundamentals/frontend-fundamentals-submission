type InputProps = {
    onChange: (event: any) => void;
    onClick: () => void;
    input: string;
};

const AddTodo = ({ onChange, onClick, input }: InputProps) => {
    return (
        <div>
            <input onChange={onChange} value={input} style={{
                flex: 1,
                borderBottom: "2px solid",
                padding: "1rem 0",
                fontSize: "1.25rem"
            }} />
            <button onClick={onClick} >Add</button>
        </div>
    );
};
export default AddTodo;