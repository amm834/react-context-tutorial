import {useContext} from "react";
import {CounterContext} from "./contexts/CounterProvider.jsx";


function App() {
    const {count, setCount} = useContext(CounterContext)

    return (
        <main className="mx-auto container py-8">
            <h1>Count: {count}</h1>
            <button className="bg-red-500 px-4 py-2" onClick={() => setCount(count + 1)}>Click me</button>
        </main>
    )
}

export default App
