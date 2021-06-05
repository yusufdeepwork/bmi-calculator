import React from 'react';
import {ProfileContainer, TitleText} from './styles'
const Profile = ({ibms}) =>{

    return(
        <ProfileContainer>

            <TitleText>Your IBM Scores</TitleText>
            {ibms.map((ibm,index)=> <div>{(index+1)+" : "+ibm.toString()}</div>)}
            <TitleText>you should make diet list.</TitleText>
    </ProfileContainer>)
}
export default Profile;
