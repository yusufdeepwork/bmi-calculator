import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Container>
                <Profile>
                    hoşgeldin Yusuf
                </Profile>
                <Pages>
                    <PagesText><Link to={"/"}>BMI CALCULATOR</Link></PagesText>
                    <text> | </text>
                    <Link to={"/profile"} >
                    <PagesText>Profile</PagesText>
                </Link>
                </Pages>
            </Container>
        </header>
    );
};

export default Header;

const Title = styled.div`

  margin-bottom: 2vw;
  font-size: 2.5rem;
  font-family: "Fira Code Medium",monospace;
`;
const Profile = styled.div`
  margin-bottom: 2vw;
  font-size: 2.5rem;
  font-family: "Fira Code Medium",monospace;
`
const Container = styled.div`
  margin-top: 4%;
    justify-self: center;
  flex-direction: column;
  margin-bottom: 1vw;
  width: 100%;
  display: flex;
  list-style-type: none;
justify-content: center;
  align-items: center;
  
`

const Pages = styled.div`
  font-size: 2rem;
  margin-top: 1vw;
  font-family: "Fira Code Medium",monospace;
  margin-bottom: 2vw;

`
const PagesText = styled.text`
  text-decoration-line: underline;
  cursor: pointer;
`
