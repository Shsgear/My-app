import * as React from 'react';

export interface Iprops {
  name: string,
  level?: number
}

class Hello extends React.Component<Iprops, object> {
  public render() {
    const { name, level = 1 } = this.props;
    return (
      <div className="hello">
        Hello { `${name} ${getMarks(level)}` }
      </div>
    )
  }
}

export default Hello;

// helpers
const getMarks = (numChars: number) => {
  return new Array(numChars + 1).join('!');
}
