import styled from 'styled-components';

const StyledComponet = () => {
  return (
    <>
      <Wrapper>
        <Title>スタイルコンポーネントです</Title>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  border: 1px solid red;
`;

const BaseTitle = styled.h1`
  color: blue;
`;
// 継承
const Title = styled(BaseTitle)`
  background-color: green;
`;
export default StyledComponet;
