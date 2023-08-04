import './App.css'
import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import Button from "./components/Button.jsx";

function App() {

    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: "Dit is een test"
        },
        {
            id: uuidv4(),
            title: "Dit is een test andere test"
        },
    ])

    const [inputField, setInputField] = useState("")

    function handleClick() {
        setTodos([...todos,
            {
                id: uuidv4(),
                title: inputField
            }
        ])
    }

    return (
        <>
            <input
                type="text"
                value={inputField}
                onChange={(event) => setInputField(event.target.value)}
            />
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <span>{todo.id}</span>
                        {todo.title}
                    </li>
                )
            })}
            <button type="button" onClick={handleClick}>Add to do</button>
            <Button
                variant="secondary"
                buttonType="button"
                handleClick={() => console.log("Button clicked")}
            >
                Callback Button
            </Button>
        </>
    )
}

export default App
