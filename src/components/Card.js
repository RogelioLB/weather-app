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
background-color: rgba(255,255,255,.4);
backdrop-filter: blur(4px);
flex-direction: column;
justify-content: ${props=>props.max===false ? "center" : "initial"};
align-items: ${props=>props.max===false ? "center" : "initial"};
width: 100%;
height:100%;
padding:25px;
border-radius:0;
@media screen and (min-width:768px){
    width:clamp(600px,80vw,1200px);
    height:clamp(400px,71vh,800px);
    border-radius: 8px;
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
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
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
    margin:0 20px 0 0;
}
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
@media screen and (min-width:768px){
    justify-content: initial;
}
`

const DegreesContainer = styled.div`
display:flex;
align-items: center;
`
const CardBody = styled.div`
display:flex;
justify-content: space-between;
flex-wrap: wrap;
flex-direction: column;
margin-bottom: 50px;
@media screen and (min-width:768px){
    flex-direction: row;
}
`

const CoordsContainer = styled.div`
display:flex;
color:#fff;
justify-content: space-between;
`

const H2 = styled.h2`
margin:0 30px 0 0;
`

const DataContainer = styled.div`
color:#fff;
margin-top:50px;
@media screen and (min-width:768px){
    margin:0;
}
`

const Item = styled.div`
color:#fff;
display:flex;
align-items: center;
justify-content:space-between;
margin-bottom: 20px;
`
const Card = () => {
    const {loaded,getWeather,name,degrees,getWeatherGeo,desc,lon,lat,min,max,hum} = useWeather();

    return (
        <CardContainer max={loaded}>
            {
                loaded ? (
                    <>
                        <CardTop>
                            <Title>{name}</Title>
                            <DegreesContainer>
                                <Icon icon={faCloud}/>
                                <Degrees degrees={degrees} desc={desc}/>
                            </DegreesContainer>
                        </CardTop>
                        <CardBody>
                            <CoordsContainer>
                                <H2>
                                    Lat:<br/>
                                    {lat}
                                </H2>
                                <H2>
                                    Lon:<br />
                                    {lon}
                                </H2>
                            </CoordsContainer>
                            <DataContainer>
                                <Item>
                                    <H2>Min - {min}°C</H2>
                                    <H2>Max - {max}°C</H2>
                                </Item>
                                <Item>
                                    <H2>Humidity - {hum}%</H2>
                                </Item>
                            </DataContainer>
                        </CardBody>
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
