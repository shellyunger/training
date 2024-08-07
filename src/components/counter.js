import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function Plus() {
        setCount(count + 1);
    }

    function Minus() {
        setCount(count - 1);
    }

    const [stringText, setStringText] = useState("");
    function handleChangeText(event) {
        setStringText(event.target.value);
    }

    const [numberValue, setNumberValue] = useState(0);
    function handleChangeNumber(event) {
        setNumberValue(event.target.value);
            }

    return (
        <div>
        <h1>{count}</h1>

        <button onClick={Plus}>Plus</button>

        <button onClick={Minus}>Minus</button>

        <input type="text" value={stringText} onChange={handleChangeText} />
        <button onClick={() => alert(stringText)}>Click me!</button>

<input type="number" value={numberValue} onChange={handleChangeNumber} placeholder="number"/>
        <button onClick={() => alert(stringText + " " + numberValue)}>Click me!</button>

        </div>
        
    );
}

export default Counter;