import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
outline:none;
color:#fff;
background: #202324;
border:0;
border-radius: 8px;
padding:10px 15px;
width:fit-content;
cursor:pointer;
margin:0 10px 0 0;
`
const Icon = styled(FontAwesomeIcon)`
margin:0 0 0 10px;
`

const Button = ({icon,onClick}) => {
    return (
        <Btn onClick={onClick}>
            Get Weather By
            {icon ? <Icon icon={faMapMarkerAlt}/> : " Coords"}
        </Btn>
    )
}

export default Button
