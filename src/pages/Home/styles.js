import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;
const InputValue = styled.div`
  margin-top: 2vw;
  font-size:50px;
  font-family: "Fira Code Medium",monospace;
`
const Title = styled.div`

  margin-bottom: 2vw;
  font-size: 2.5rem;
  font-family: "Fira Code Medium",monospace;
`;
const SliderContainer = styled.div`

  display: flex;
  flex-direction: row;
`
const SliderItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  margin-left: 2vw;
  margin-right: 2vw;
`
const CalculateButton = styled.div`
  margin-top: 3vw;
  border: 2px solid black ;
  padding: 1vw;
  font-size: 2.5rem;
  font-family: "Fira Code Medium",monospace;
  cursor: pointer;
`
const CalculaterContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
`
export {
    HomeContainer,
    InputValue,
    Title,
    SliderContainer,
    SliderItem,
    CalculateButton,
    CalculaterContainer
};
