import React from 'react';

const Counter = props => {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Count is {count}</button>
  );
};

export default Counter;
