import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg('Could not reach the backend'));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;