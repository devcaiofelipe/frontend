import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App({ name }) {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1)
    }
  }

  const handleNext = () => {
    if (step < 3) {
      setStep((step) => step + 1)
    }
  }

  const handleShow = () => {
    setShow(show => !show);
  }

  return (
    <>
      <header className='header'>
        <span onClick={handleShow}>X</span>
      </header>
      <div className="steps" style={{ display: show ? 'block' : 'none' }}>
        <div className="numbers">
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
        </div>

        <StepMessage step={step}>{messages[step - 1]}</StepMessage>

        <div className="buttons">
          <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}><span>👈</span> Previous</Button>
          <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>Next <span>👉</span></Button>
        </div>
      </div>
    </>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}</h3>
      {children}
    </div>
  )
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  )
}