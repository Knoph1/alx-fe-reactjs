import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
      <h2>React Counter App</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Current Count: {count}</p>
      <div>
        <button 
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
          onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button 
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
          onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button 
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
          onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
