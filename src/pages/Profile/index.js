import React, {useState} from 'react';
import {ProfileContainer} from './styles'
const Profile = ({ibms}) =>{

    // ibms= ibms? [...ibms]  :localStorage.getItem("ibms")
    console.log(ibms)

    return(
        <ProfileContainer>
            <h5>Your IBM Scores</h5>
            {ibms.map((ibm,index)=> <div>{(index+1)+" : "+ibm.toString()}</div>)}
    </ProfileContainer>)
}
export default Profile;