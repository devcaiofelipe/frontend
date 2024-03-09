import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('USD');

  const handleValue = (e) => {
    setValue(Number(e.target.value));
  }

  const handleFrom = (e) => {
    setFrom(e.target.value)
  }

  const handleTo = (e) => {
    setTo(e.target.value)
  }

  useEffect(() => {
    const getCurrency = async () => {
      setErrorMessage('');
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${from}&to=${to}`)
      const data = await res.json();
      if (res.status === 200) {
        const result = data.rates[to];
        setConvertedValue(result);
      } else {
        setErrorMessage(data.message)
      }
    }
    getCurrency()
  }, [value, from, to])

  return (
    <div>
      <input type='text' value={value} onChange={handleValue}/>
      <select onChange={handleFrom} value={from}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <select onChange={handleTo} value={to}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select> 
      <p>{errorMessage ? errorMessage : `OUTPUT ${convertedValue}`}</p>      
    </div>
  );
}

export default App;
