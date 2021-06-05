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
  width: 15vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`
export {
    HomeContainer,
    InputValue,
    Title,
    SliderContainer,
    SliderItem
};
