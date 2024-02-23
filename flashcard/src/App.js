import './App.css';
import { useState } from 'react';

const QA = [
  {
    id: 1,
    question: 'What language is React based on?',
    answer: 'JavaScript'
  },
  {
    id: 2,
    question: 'What are the building blocks of react apps?',
    answer: 'Components'
  },
  {
    id: 3,
    question: `What's the name of the syntax we use to describe a UI in react?`,
    answer: 'JSX'
  },
  {
    id: 4,
    question: 'How to pass data from parent to child component?',
    answer: 'Through props'
  },
  {
    id: 5,
    question: 'How to give components memory?',
    answer: 'useState hook'
  },
  {
    id: 6,
    question: 'What do we call an input element that is completely syncronised with state?',
    answer: 'Controlled element'
  }
]

export default function FlashCard() {
  return (
    <div className="app">
      {QA.map((question) => <Card key={question.id} question={question.question} answer={question.answer}/>)}
    </div>
  );
}

function Card({ question, answer }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
    onClick={() => setIsShow(!isShow)}
    style={ isShow ? { backgroundColor: 'red', color: 'white' } : null }
    >{ isShow ? answer : question }</div>
  )
}
