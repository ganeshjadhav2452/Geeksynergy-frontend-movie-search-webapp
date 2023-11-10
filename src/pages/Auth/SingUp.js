import React, { useState } from 'react'
import '../../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'


const SingUp = () => {
    const [authInfo, setAuthInfo] = useState({
        name: '',
        email: '',
        password: '',
        profession: ''
    })
    const navigate = useNavigate()

    const nameChangeHandler = (e) => {
        setAuthInfo((prevAuthInfo) => {
            return {
                ...prevAuthInfo,
                name: e.target.value
            }
        })
    }
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
    const professionChangeHandler = (e) => {
        setAuthInfo((prevAuthInfo) => {
            return {
                ...prevAuthInfo,
                profession: e.target.value
            }
        })
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        localStorage.setItem('user', JSON.stringify(authInfo))

        setAuthInfo((prevAuthInfo) => {
            return {
                name: '',
                email: '',
                password: '',
                profession: ''
            }
        })
        navigate('/')
    }

    return (
        <div className='login-container'>
            <div className='second-child'>

                <div className="login">
                    <div className="login-header">
                        <h3>Sign Up</h3>
                    </div>
                    <form onSubmit={formSubmitHandler} className="login-form">
                        <h3>Name:</h3>
                        <input onChange={nameChangeHandler} value={authInfo.name} type="text" placeholder="Name" /><br />
                        <h3>Password:</h3>
                        <input onChange={passwordChangeHandler} value={authInfo.password} type="password" placeholder="Password" />
                        <h3>Email:</h3>
                        <input onChange={emailChangeHandler} value={authInfo.email} type="email" placeholder="email" />

                        <select
                            value={authInfo.profession}
                            onChange={professionChangeHandler}
                        >
                            <option value="none">Select a Profession</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Other">Other</option>
                        </select>
                        <br />
                        <input type="submit" defaultValue="Sign Up" className="login-button" />
                        <br />
                        <Link to={'/'} className="sign-up">Login</Link>
                        <br />

                    </form>
                </div>

            </div>

        </div>
    )
}

export default SingUp