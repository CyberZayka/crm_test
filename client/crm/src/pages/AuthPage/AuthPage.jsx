import React, { useContext, useEffect, useState } from 'react'
import Form from "../../components/Form/Form"
import useHttp from "../../hooks/http.hook"
import { AuthContext } from '../../context/AuthContext'


const AuthPage = () => {
    const auth = useContext(AuthContext)
    const { error, request, clearError} = useHttp()

    const [form, setForm] = useState({email: '', password: ''})
    const [isRegistered, setRegister] = useState(true)

    useEffect(() => {
        clearError()
    }, [error, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {

        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data);

        } catch (e) {

        }
    }

    const loginHandler = async () => {

        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            console.log(data);
            auth.login(data.token, data.userId)
        } catch (e) {

        }
    }

    const checkoutLogin = () => {
        setRegister(!isRegistered)
    }

    return (
        <Form changeHandler={changeHandler} registerHandler={registerHandler} loginHandler={loginHandler} setRegister={checkoutLogin} isRegistered={isRegistered} />
    )
}

export default AuthPage