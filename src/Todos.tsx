import { useState } from "react";
import DisplayTodos from "./DisplayTodos";
import AddTodo from "./AddTodo";

const Todos = () => {
    const [input, setInput] = useState<string>('');
    const [todos, setTodos] = useState<string[]>([])

    const onClick = () => {
        todos.push(input)
        setTodos(todos)
        setInput('')
    };

    const onChange = (event: any) => {
        setInput(event.target.value)
    };

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1>TODOs</h1>
            <AddTodo onChange={onChange} onClick={onClick} input={input} />
            <DisplayTodos todos={todos} removetodo={removeTodo} />
        </div>
    );
};
export default Todos;