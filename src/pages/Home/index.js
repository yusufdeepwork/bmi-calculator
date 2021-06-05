import React, {useState} from 'react';
import {HomeContainer, InputValue, Title, SliderContainer, SliderItem, CalculateButton, CalculaterContainer} from './styles';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css';
export const Home = () => {
    console.log("geldi")
    const [info, setInfo] = useState({  weight: 70, height:170});
    const {weight, height} = info;
    const bmi = (((weight)/(Math.pow(height/100,2)))).toFixed(4);
    return(
        <HomeContainer>
           <SliderContainer>

               <SliderItem>
                   <Title>Your Height</Title>
                   <div  style={{width:"100%"}}>
                   <Slider min={20} max={251} value={height}
                           onChange={( x )=> setInfo({height: x,weight: weight})}
                   /></div>
                   <InputValue>{height} cm</InputValue>
               </SliderItem>

               <SliderItem>
                   <Title>Your Weight</Title>
                   <div  style={{width:"100%"}}>
                       <Slider min={20} max={251} value={weight}
                               onChange={( x )=> setInfo({weight: x,height: height})}
                       /></div>
                   <InputValue>{weight} kg</InputValue>
               </SliderItem>
           </SliderContainer>
            <CalculaterContainer>
                <CalculateButton>Your BMI : { bmi}</CalculateButton>
                <CalculateButton>Save </CalculateButton>
            </CalculaterContainer>


        </HomeContainer>
    )

}
