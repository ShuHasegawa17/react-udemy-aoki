import React, { useState } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      テストコンポーネント
      <br />
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
};

export default TestComponent;
