import { useState } from "react"

export default function Home() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>
                Hello! {counter}<br/>
                <button onClick={() => {setCounter(prev => prev+1)}}>+</button>
            </h1>
        </div>
    );
}