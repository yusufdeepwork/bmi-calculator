import React from 'react';
import Header from './Header';
import styled from "styled-components";
const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
};

export default Layout;

const Container = styled.div`
  
`;
