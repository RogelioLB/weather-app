import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from "styled-components"
import { useWeather } from '../hooks/useWeather'
import Button from './Button'
import Degrees from './Degrees'
import Loader from './Loader'

const CardContainer = styled.div`
display:flex;
background-color: rgba(255,255,255,.5);
backdrop-filter: blur(4px);
flex-direction: column;
justify-content: ${props=>props.max===false ? "center" : "initial"};
align-items: ${props=>props.max===false ? "center" : "initial"};
width: 100%;
height:100%;
padding:25px;
@media screen and (min-width:768px){
    width:clamp(600px,80vw,1200px);
    height:clamp(400px,71vh,800px);
}
`

const CardTop = styled.div`
display:flex;
color:#fff;
height: fit-content;
justify-content: center;
font-size:28px;
flex-direction: column;
margin-bottom: 50px;
@media screen and (min-width:768px){
    flex-direction: row;
    align-items: center;
    justify-content: inherit;
}
`

const Icon = styled(FontAwesomeIcon)`
width:100px !important;
height:100px !important;
@media screen and (min-width:768px){
    margin:0 20px;
}
`

const Title = styled.h1`
font-weight: 500;
font-size: 40px;
@media screen and (min-width:768px){
    margin:0 20px;
}
`

const ButtonContainer = styled.div`
display: flex;
`

const Card = () => {
    const {loaded,getWeather,name,degrees,getWeatherGeo} = useWeather();

    return (
        <CardContainer max={loaded}>
            {
                loaded ? (
                    <>
                        <CardTop>
                            <Title>{name}</Title>
                            <Icon icon={faCloud}/>
                            <Degrees degrees={degrees}/>
                        </CardTop>
                        <ButtonContainer>
                            <Button icon onClick={getWeatherGeo}/>
                        </ButtonContainer>
                    </>
                )
                :
                <Loader />
            }
        </CardContainer>
    )
}

export default Card
