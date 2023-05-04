import React, { useState } from 'react';
import styled from 'styled-components';

const StyledUseStateProps = () => {
  const [isRed, setIsRed] = useState(false);

  return (
    <>
      <StyledComponet isRed={isRed}>
        <p>props ＋ useStateのテスト</p>
        <button onClick={() => setIsRed(!isRed)}>色を変える</button>
      </StyledComponet>
    </>
  );
};

const StyledComponet = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${(props) => (props.isRed ? 'red' : 'green')};
`;

export default StyledUseStateProps;
