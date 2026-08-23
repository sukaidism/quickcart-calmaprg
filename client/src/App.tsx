import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('checking...');
  
  useEffect(() => {
    fetch('http://localhost:3000/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('unreachable'));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>QuickCart</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default App;