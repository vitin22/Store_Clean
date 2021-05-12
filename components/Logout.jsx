import React, { useState } from 'react';
import { LOGIN_MUTATION } from './Apollo/jobs.mutations';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {useRouter, Router} from 'next/router'
import Estilo from './ScriptD'


//import { newRegistery, Registery } from './Type';
import withApollo from './Apollo/apollo';
import Link from 'next/link';
import { client } from './Apollo/ApolloV';


/*
 <form onSubmit={event => handleSubmit(event, tokenAuth, client)}>
                                    

        
        

                                    
                                    <input
                                        type="text"
                                        id="email"
                                        value={username}
                                        onChange={e => setUserName(e.target.value)}
                                        placeholder="Usuario"
                                        
                                        
                                    />
                                    <input
                                        
                                        id="password"
                                        placeholder="Contraseña"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                    />

                                     <button className="search-btn">Entrar</button>

                                    
                                   
                                   
                                    </form>
*/ 

function Logout() {
    // local
    const route = useRouter()
    let [username, setUserName] = useState("");
    let [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleSubmit = () => {
        
        client.resetStore();
        
    };

 

    return (
<div>
                   
<Estilo/>
                   <div id="login-popup" className="mfp-hide">
        <div className="form-login-register">
            <div className="tabs mb-8">
                <ul className="nav nav-pills tab-style-01 text-capitalize justify-content-center"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="login-tab" data-toggle="tab"
                           href="#login"
                           role="tab"
                           aria-controls="login" aria-selected="true"><h3>Logout</h3></a>
                    </li>
                   
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="login" role="tabpanel"
                     aria-labelledby="login-tab">
                    <div className="form-login">
                    <form onSubmit={event => handleSubmit()}>
                            <div className="font-size-md text-dark mb-5">Logout In Your Account</div>
                        
                            <button type="submit"
                                    className="btn btn-primary btn-block font-weight-bold text-uppercase font-size-lg rounded-sm mb-8">
                                Logout 
                            </button>
                        </form>
                        
                        <div className="font-size-md text-dark mb-5">Or Log In With</div>
                        <div className="social-icon origin-color si-square">
                            <ul className="row no-gutters list-inline text-center">
                                <li className="list-inline-item si-facebook col-3">
                                    <a target="_blank" title="Facebook" href="#">
                                        <i className="fab fa-facebook-f">
                                        </i>
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className="list-inline-item si-twitter col-3">
                                    <a target="_blank" title="Twitter" href="#">
                                        <i className="fab fa-twitter">
                                        </i>
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li className="list-inline-item si-google col-3">
                                    <a target="_blank" title="Google plus" href="#">
                                        <svg className="icon icon-google-plus-symbol">
                                            <use xlinkHref="#icon-google-plus-symbol"></use>
                                        </svg>
                                        <span>Google plus</span>
                                    </a>
                                </li>
                                <li className="list-inline-item si-rss col-3">
                                    <a target="_blank" title="RSS" href="#">
                                        <i className="fas fa-rss"></i>
                                        <span>RSS</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
               
            </div>
            <form>

            </form>
        </div>
    </div>

                   
	
	
                </div>
                               
                        
    );
}

export default withApollo(Logout);



{/*

<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="login/images/img-01.png" alt="IMG"/>
				</div>

				<form className="login100-form validate-form" onSubmit={event => handleSubmit(event, tokenAuth, client)}>
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="username" value={username} onChange={e => setUserName(e.target.value)} placeholder="User"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
                        <Link href='/senmail'>
						<a className="txt2" >
							Username / Password?
						</a>
                        </Link>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="#">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>

*/}