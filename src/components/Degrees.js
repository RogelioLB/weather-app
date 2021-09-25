import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
height: fit-content;
`
const Title = styled.h1`
font-size: 54px;
font-weight: 700;
`

const Desc = styled.p`
display:flex;
align-items: flex-end;
padding-bottom:2px;
margin-left: 10px;
font-size:18px;
`

const Degrees = ({degrees}) => {
    return (
        <Container>
            <Title>{degrees}°C</Title>
            <Desc>Despejado</Desc>
        </Container>
    )
}

export default Degrees
