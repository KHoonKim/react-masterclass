import styled from "styled-components"

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 200px;
  height: 100px;
`

const Title = styled.h1`
  color: white;
`

function App() {
  return (
    <Father>
      <BoxOne>
        <Title>Hello</Title>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
