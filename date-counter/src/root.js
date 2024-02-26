import './root.css';
import { useState } from 'react';

export default function Root() {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);
  const [date, setDate] = useState(today);
  const [dateAdd, setDateAdd] = useState(today);

  const handleIncrementStep = () => {
    setStep(step => step + 1);
  }

  const handleDecrementStep = () => {
    if (step > 1) setStep(step => step - 1);
  }

  const handleIncrementCount = () => {
    setCount(count => count + step);
    const days = (60 * 60 * 24 * 1000) * step;
    const newDate = new Date(today.getTime() + days);
    setDate(newDate);
  }

  const handleDecrementCount = () => {
    setCount(count => count - step);
    const days = (60 * 60 * 24 * 1000) * step;
    const newDate = new Date(today.getTime() - days);
    setDate(newDate);
  }

  const handleDayMessage = (count, date) => {
    const pattern = 'en-US'
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
    let message;
    if (count === 0) {
      message = `Today is ${date.toLocaleDateString(pattern, options)}`
    } else if (count > 0) {
      message = `${count} days from today is ${date.toLocaleDateString(pattern, options)}`
    } else {
      message = `${count * -1 } ago from today is ${date.toLocaleDateString(pattern, options)}`
    }
    return message.replaceAll(',', '');
  }


  // new
  const handleChange = (e) => {
    setCount(Number(e.target.value));
    const days = (60 * 60 * 24 * 1000) * e.target.value;
    const newDate = new Date(date.getTime() + days);
    setDateAdd(newDate)
  }

  const handleIncrement = () => {
    setCount((count) => count + range)
    const days = (60 * 60 * 24 * 1000) * (count + range);
    const newDate = new Date(date.getTime() + days);
    setDateAdd(newDate)
  }

  const handleDecrement = () => {
    setCount((count) => count - range)
    const days = (60 * 60 * 24 * 1000) * count;
    const newDate = new Date(date.getTime() - days);
    setDate(newDate);
  }

  const handleChangeRange = (e) => {
    setRange(Number(e.target.value))
  }

  return (
    <div className='root'>
      <div>
        <input type='range' step='1' value={range} onChange={handleChangeRange} minLength={0} max={10}/><span>{range}</span>
      </div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input onChange={handleChange} value={count}/>
        <button onClick={handleIncrement}>+</button>
      </div>
      <span>{handleDayMessage(count, dateAdd)}</span>
    </div>
  )
}