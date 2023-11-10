import React, { useState } from 'react'
import '../../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
    const navigate = useNavigate()
    const [authInfo, setAuthInfo] = useState({

        email: '',
        password: '',

    })

    const passwordChangeHandler = (e) => {
        setAuthInfo((prevAuthInfo) => {
            return {
                ...prevAuthInfo,
                password: e.target.value
            }
        })
    }
    const emailChangeHandler = (e) => {
        setAuthInfo((prevAuthInfo) => {
            return {
                ...prevAuthInfo,
                email: e.target.value
            }
        })
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()

        let userFromLocalStorage = localStorage.getItem('user')
        let user = JSON.parse(userFromLocalStorage)

        if (authInfo.email == user.email && authInfo.password == user.password) {
            localStorage.setItem('isLoggedIn', true)
            navigate('/dashboard')
            toast.success('Login Successfull ! Redirecting to Dashboard...')

        } else {
            toast.error('Wrong Credentials')

        }



    }
    return (
        <div className='login-container'>
            <div className='second-child'>

                <div className="login">
                    <div className="login-header">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={formSubmitHandler} className="login-form">
                        <h3>Email:</h3>
                        <input value={authInfo.email} onChange={emailChangeHandler} type="email" placeholder="email" /><br />
                        <h3>Password:</h3>
                        <input value={authInfo.password} onChange={passwordChangeHandler} type="password" placeholder="Password" />
                        <br />
                        <input type="submit" defaultValue="Login" className="login-button" />
                        <br />
                        <Link to={'/sign-up'} className="sign-up">Sign Up!</Link>
                        <br />

                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login