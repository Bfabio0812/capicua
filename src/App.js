import React, { useState } from 'react';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [isCapicua, setIsCapicua] = useState(null);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const checkCapicua = () => {
        const reversedValue = inputValue.split('').reverse().join('');
        setIsCapicua(inputValue === reversedValue);
    };

    return (
        <div className="App">
            <h1>Verificar Capicua</h1>
            <input
                type="text"
                placeholder="Enter text or numbers"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={checkCapicua}>Click</button>
            {isCapicua !== null && (
                <h2>{isCapicua ? 'Es capicúa' : 'No es capicúa'}</h2>
            )}
        </div>
    );
}

export default App;