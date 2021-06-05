import React, {useState} from 'react';
import {HomeContainer, InputValue, Title, SliderContainer, SliderItem} from './styles';
import Slider from 'react-input-slider';
export const Home = () => {
    console.log("geldi")
    const [info, setInfo] = useState({  weight: 70, height:170});

    return(
        <HomeContainer>
           <SliderContainer>
               <SliderItem>
                   <Title>Boyunuz</Title>
                   <Slider axis="x" xstep={1} xmin={0} xmax={220} x={info.height}
                             onChange={({ x }) => setInfo({ weight:info.weight,height: parseFloat(x.toFixed(2)) })}
                   />
                   <InputValue>{info.height} cm</InputValue></SliderItem>
               <SliderItem>
                   <Title>Kilonuz</Title>
                   <Slider axis="x" xstep={1} xmin={0} xmax={220} x={info.weight}
                           onChange={({ x }) => setInfo({ height:info.height,weight: parseFloat(x.toFixed(2)) })}
                   />
                   <InputValue>{info.weight} kg</InputValue></SliderItem>
           </SliderContainer>
        </HomeContainer>
    )

}
