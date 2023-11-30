import './index.css';
import React, { useState } from 'react';


function App() {

  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const bubbleSort = () => {
    const numbers = inputText.split(' ').map(Number);
    let swapped;
    let swapCounter = 0;

    do {
      swapped = false;

      for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
          // Swap elements
          [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
          swapped = true;
          swapCounter++;
        }
      }
    } while (swapped);

    setResultText(`Sorted array: ${numbers.join(' ')}, Swaps: ${swapCounter}`);
  };

  const selectionSort = () => {
    const numbers = inputText.split(' ').map(Number);
    let swapCounter = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Swap elements
        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
        swapCounter++;
      }
    }

    setResultText(`Sorted array (Selection Sort): ${numbers.join(' ')}, Swaps: ${swapCounter}`);
  };

  return (
    <main>  
      <div className="app">
      <h1>Bubble sort/Selection Sort</h1>
      <p>Write the numbers separated by a space</p>
      <div>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
      <input
      id="textInput"
      placeholder="Enter text..."
      onChange={handleInputChange}
      value={inputText}
      />
      </div>
      <div>
      <button onClick={bubbleSort}>Bubble sort</button>
      </div>
      <div>
      <button onClick={selectionSort}>Selection sort</button>
      </div>
      <div>
        <label>
        {resultText}
      </label>
      </div>
    </div>
    </main>
  );
}

export default App;
