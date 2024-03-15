import './App.css';
import { useReducer } from 'react';

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'openAccount':
      return { ...state, isActive: true, balance: 500 }
    case 'deposit':
      return { ...state, balance: state.balance + 150 }
    case 'withdraw':
      return { ...state, balance: state.balance - 50 }
    case 'requestLoan':
      if (state.loan) alert('You must pay your loan to request another')
      return { ...state, balance: state.balance + 5000, loan: 5000 }
    case 'payLoan':
      return { ...state, balance: state.balance - 5000, loan: 0 }
    case 'closeAccount':
      return { ...initialState}
    default:
      throw new Error('unknown action')
  }
}

function Bank() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loan, balance, isActive} = state;

  return (
    <div className='main'>
      <h1>userReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
      <button disabled={isActive} onClick={() => dispatch({ type: 'openAccount' })}>Open account</button>
      <button disabled={!isActive} onClick={() => dispatch({ type: 'deposit' })}>Deposit 150</button>
      <button disabled={!isActive} onClick={() => dispatch({ type: 'withdraw' })}>Withdraw 50</button>
      <button onClick={() => dispatch({ type: 'requestLoan' })}>Request a loan of 5000</button>
      <button onClick={() => dispatch({ type: 'payLoan' })}>Pay loan</button>
      <button disabled={!isActive} onClick={() => dispatch({ type: 'closeAccount' })}>Close account</button>
    </div>
  );
}

export default Bank;
