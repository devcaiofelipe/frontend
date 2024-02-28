import './App.css';
import { useState } from 'react';




const App = () => {
  const [billValue, setBillValue] = useState(0);
  const [myOpinion, setMyOpinion] = useState('dissatisfied');
  const [otherOpinion, setOtherOpinion] = useState('dissatisfied');

  const opinionPercentage = {
    dissatisfied: 0,
    okay: 5,
    good: 10,
    amazing: 20,
  }
  
  const opinionMapper = (value) => {
    return opinionPercentage[value];
  }
  
  const calculateAverage = () => {
    const Iopinion = opinionMapper(myOpinion);
    const friendOpinion = opinionMapper(otherOpinion);
    const average = (Iopinion + friendOpinion) / 2
    return average;
  }

  return (
    <div className='container'>
      <BillInput billValue={billValue} onChangeBill={setBillValue}/>
      <OpinionPercentage onSelect={setMyOpinion}>
        <span>How did you like the service?</span>
      </OpinionPercentage>
      <OpinionPercentage onSelect={setOtherOpinion}>
        <span>How did your friend like the service?</span>
      </OpinionPercentage>
      {billValue !== 0 && (<Output billValue={billValue} percentage={calculateAverage()}/>)}
      {billValue !== 0 && (<ResetButton onChangeMyOpinion={setMyOpinion} onChangeOtherOpinion={setOtherOpinion} onChangeBillValue={setBillValue}/>)}
    </div>
  );
}

const BillInput = ({ billValue, onChangeBill }) => {
  return (
    <div>
      <span>How much was the bill?</span><input onChange={(e) => onChangeBill(Number(e.target.value))} value={billValue}/>
    </div>
  );
}

const OpinionPercentage = ({ children, onSelect }) => {
  return (
    <div>
      {children}
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value='dissatisfied'>Dissatisfied (0%)</option>
        <option value='okay'>It was okay (5%)</option>
        <option value='good'>It was good (10%)</option>
        <option value='amazing'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

const Output = ({ billValue, percentage }) => {
  const calcTipValue = (billValue, percentage) => {
    const tipValue = (percentage / 100) * billValue
    return tipValue
  }

  return (
    <p style={{ fontWeight: 'bold', fontSize: '22px' }}>You pay ${billValue + calcTipValue(billValue, percentage)} (${billValue} + ${calcTipValue(billValue, percentage)} tip)</p>
  )
}

const ResetButton = ({ onChangeMyOpinion, onChangeOtherOpinion, onChangeBillValue}) => {
  const reset = () => {
    onChangeBillValue(0)
    onChangeMyOpinion('dissatisfied')
    onChangeOtherOpinion('dissatisfied')
  }
  return (
    <button onClick={reset}>Reset</button>
  )
}

export default App;
