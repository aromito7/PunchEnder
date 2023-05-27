import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import * as sessionActions from "../../store/session";
import SignUpForm from './SignUpForm';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState("")
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    var data = await dispatch(login(email, password));
    const dataErrors = {}
    data = data.forEach(datum => {
      const [key, value] = datum.split(' : ');
      //console.log(key, value)

      dataErrors[key] = value
    })
    // console.log(dataErrors)
    // console.log(dataErrors.email, dataErrors.password)
    if (dataErrors.email) setEmailError(dataErrors.email)
    if (dataErrors.password) setPasswordError(dataErrors.password)

    if (data) {
      setErrors(data);
    }
  };

  const switchToSignup = () => {
		history.push('/sign-up');
	};

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const demoUser = (e) => {
		e.preventDefault();

		return dispatch(
			sessionActions.login( 'demo@aa.io', 'password' )
		)
			.then(() => <Redirect to='/' />)
			.catch(async (res) => {
				const data = await res.json();
				if (data && data.errors) setErrors(data.errors);
			});
	};

  return (
    <div className='login__container'>
      <form className='login-form' onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='input4'>
          <div className='login__title'>Log in</div>
          <div>
            <label htmlFor='email'></label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              className='box-input-log'
              onChange={updateEmail}
            />
              {emailError &&
                <p className='error-message'>
                  {emailError}
                </p>
              }
          </div>
          <div>
            <label htmlFor='password'></label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              className='box-input-log'
              onChange={updatePassword}
            />
              {passwordError &&
                <p className='error-message'>
                  {passwordError}
                </p>
              }
            <button className='login-submit-button'>Log in</button>
            <button onClick={demoUser} className="login-submit-button" type='submit'>
              Demo-User
            </button>
          </div>
          <p className="login-toggle">
          New to Punchender? {' '}‎ {' '} {' '} {' '} {' '}
          <span
            style={{
              fontSize: '14px',
              cursor: 'pointer',
              color: '#1c36fc',
            }}
            onClick={switchToSignup}
          >
             {'  '} ‎ {' '}
            Sign Up
          </span>
        </p>
        <p className='captcha'>
          This site is protected by reCAPTCHA and the Google Privacy  {'  '}
          Policy and Terms of Service apply.
        </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
