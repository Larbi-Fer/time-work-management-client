import React from 'react'
import { useNavigate, useParams } from 'react-router'

const Auth = () => {
    const {type} = useParams()
    const navigate = useNavigate()
    return (
        <div>Auth, {type}</div>
    )
}

export default Auth