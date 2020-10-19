import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    //Extract email and password
    const {email, password} = user



    const handleOnChange = (e) => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }
    //When a user wants to Login
    const handleSubmit = e => {
        e.preventDefault();
        //Validate

        //Pass to actions
    }


    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log In</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your E-mail"
                            onChange={handleOnChange}
                            value={email}
                        />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            onChange={handleOnChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Log in"
                        />
                    </div>
                </form>
                <Link 
                    to="/new-account"
                    className="enlace-cuenta"
                > Create account

                </Link>
            </div>
        </div>
     );
}
 
export default Login