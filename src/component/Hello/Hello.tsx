import * as React from 'react';
import './hello.css';

export interface IProps {
  name: string,
  level?: number
}

interface IState {
  currentLevel: number
}

class Hello extends React.Component<IProps, IState> {
  
  constructor(props: IProps) {
    
    super(props);
    this.state = { currentLevel: props.level || 1 };
  }

  public render() {
    const { name } = this.props;
    if (this.state.currentLevel <=0) {
      throw new Error('no more increment');
    }
    return (
      <div className="hello">
        Hello { `${name} ${getMarks(this.state.currentLevel)}` }
        <p>
          <button onClick={this.onDecremnt}>+1</button>
          <button onClick={this.onIncremnt}>-1</button>
        </p>
      </div>
    )
  }
  public updateLevel(level: number) {
    this.setState({
      currentLevel: level
    })
  };
  private onIncremnt = () => this.updateLevel(this.state.currentLevel - 1);
  private onDecremnt = () => this.updateLevel(this.state.currentLevel + 1);

  
}

export default Hello;

// helpers
const getMarks = (numChars: number) => {
  return new Array(numChars + 1).join('!');
}
