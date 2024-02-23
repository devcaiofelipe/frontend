import './root.css';
import { useState } from 'react';

export default function Root() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleIncrementStep = () => {
    setStep(step => step + 1);
  }

  const handleDecrementStep = () => {
    if (step > 1) setStep(step => step - 1);
  }

  const handleIncrementCount = () => {
    setCount(count => count + step);
    const days = (60 * 60 * 24 * 1000) * step;
    const newDate = new Date(date.getTime() + days);
    setDate(newDate);
  }

  const handleDecrementCount = () => {
    setCount(count => count - step);
    const days = (60 * 60 * 24 * 1000) * step;
    const newDate = new Date(date.getTime() - days);
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

  return (
    <div className='root'>
      <div>
        <button onClick={handleDecrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleIncrementStep}>+</button>
      </div>
      <div>
        <button onClick={handleDecrementCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrementCount}>+</button>
      </div>
      <span>{handleDayMessage(count, date)}</span>
    </div>
  )
}