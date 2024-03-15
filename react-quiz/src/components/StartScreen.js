export default function StartScreen({ numQuestions, onDispatch }) {
  return (
    <div className='start'>
      <h2>Welcomen to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className='btn btn-ui' onClick={() => onDispatch({ type: 'start' })}>Let's start</button>
    </div>
  )
}