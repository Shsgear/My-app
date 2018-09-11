import * as React from 'react';
// import * as actions from '../../actions/index';
import './hello.css';

export interface Iprops {
  name: string,
  level?: number,
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({ name, level = 1, onIncrement, onDecrement }: Iprops) => {
  if (level <= 0) {
    throw new Error('no more decrement')
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello { name + getMarks(level) }
      </div>
      <div>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
      </div>
    </div>
  )
}

export default Hello;

// helpers
const getMarks = (numChars: number) => {
  return new Array(numChars + 1).join('!');
}
