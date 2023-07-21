import React ,{useState}from 'react';
import {Link, useHistory} from "react-router-dom";
import {auth} from "../firebase";
import './Login.css';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signin = (event) => {
		event.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
		.then(auth => {
			history.push('/')
		})
		.catch(error => alert(error.message))
	}

	const register = (event) => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				if(auth){
					history.push('/')
				}
			})
			.catch(error => alert(error.message))
	}

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login_logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
				/>
			</Link>
			<div className="login_container">
				<h1>Sign-In</h1>

				<form>
					<h5>Email</h5>
					<input type="text" value={email} onChange={event => setEmail(event.target.value)}/>

					<h5>Password</h5>
					<input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
					<button type="submit" onClick={signin} className="login_signinButton">Sign In</button>
				</form>
				<p>
					By signing-in, you agree to Amazon's 
					Fake Clone Conditions of Use and Privacy Notice
				</p>
				<button onClick={register} className="login_registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	)
}

export default Login; 