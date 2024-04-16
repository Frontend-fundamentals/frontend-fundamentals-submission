type DisplayTodosProps = {
    todos: string[];
    removetodo: (index: number) => void;
};

const DisplayTodos = ({ todos, removetodo }: DisplayTodosProps) => {
    return (
        <>
            {
                todos.map((valueTodo, index) =>
                    <div key={valueTodo} onClick={() => removetodo(index)} >{valueTodo}</div>
                )
            }
        </>
    );
};

export default DisplayTodos;