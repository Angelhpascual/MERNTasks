import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const NewAccount = () => {

    const [user, setUser] = useState({
        name: '',
        confirm: '',
        email: '',
        password: ''
    })

    //Extract email and password from user state

    const { email, password, confirm, name } = user



    const handleOnChange = (e) => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }
    //When a user wants to Login
    const handleSubmit = e => {
        e.preventDefault();


        //Validate no empty fields

        //passwords min 6 characters

        //Validate that two passwords are equals

        //Pass to actions
    }


    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Get Account</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    {/* Name Field */}

                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            onChange={handleOnChange}
                            value={name}
                        />
                    </div>

                    {/* Email Field */}

                    <div className="campo-form">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Your E-mail"
                            onChange={handleOnChange}
                            value={email}
                        />
                    </div>

                    {/* Password Field */}

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Type your password"
                            onChange={handleOnChange}
                            value={password}
                        />
                    </div>

                    {/* ConfirmPassword Field */}
                    
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Repeat your password"
                            onChange={handleOnChange}
                            value={confirm}
                        />
                    </div>

                    {/* Submit Button */}

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Register"
                        />
                    </div>
                </form>

                {/* Login Link */}

                <Link 
                    to="/"
                    className="enlace-cuenta"
                > Back to Login

                </Link>
            </div>
        </div>
     );
}
 
export default NewAccount