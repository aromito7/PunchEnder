import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [nameError, setNameError] = useState("First name must be between 2 and 50 characters")
  const [lastNameError, setLastNameError] = useState("Last name must be between 2 and 50 characters")
  const [emailError, setEmailError] = useState("Must be a valid email")
  const [passwordError, setPasswordError] = useState("Please enter a password")
  const [passwordRepeatError, setPasswordRepeatError] = useState("Passwords must match")

  const onSignUp = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    console.log(nameError)
    if(nameError || lastNameError) {
      console.log("Hello, error")
      return
    }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstname, lastname, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const switchToLogin = () => {
		history.push('/login');
	};

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2 || e.target.value.length > 50) setNameError("Name must be at least 2 characters")
    else setNameError('')
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 2 || e.target.value.length > 50) setLastNameError("Last name must be at least 2 characters")
    else setLastNameError('')
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
    if(!e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) setEmailError("Must be a valid email")
    else setEmailError('')
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length == 0) setPasswordError("Please enter a password")
    else setPasswordError('')
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
    if(e.target.value != password) setPasswordRepeatError("Passwords must match")
    else setPasswordRepeatError('')
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup__container'>
      <form className='signup-form' onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='input4'>
        <div className='signup__title'>Sign up</div>
          <label htmlFor='firstname'></label>
          <input
            type='text'
            name='firstname'
            onChange={updateFirstName}
            placeholder='First Name'
            className='box-input-log'
            value={firstname}
          ></input>
          <div className="error-message">
            {hasSubmitted ? nameError : ''}
          </div>
        </div>
        <div>
          <label htmlFor='lastname'></label>
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            onChange={updateLastName}
            className='box-input-log'
            value={lastname}
          ></input>
          <div className="error-message">
          {hasSubmitted ? lastNameError : ''}
          </div>
        </div>
        <div>
          <label htmlFor='email'></label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            className='box-input-log'
            value={email}
          ></input>
          <div className='error-message'>
            {hasSubmitted ? emailError : ''}
          </div>
        </div>
        <div>
          <label htmlFor='password'></label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            className='box-input-log'
            value={password}
          ></input>
          <div className='error-message'>
            {hasSubmitted ? passwordError : ''}
          </div>
        </div>
        <div>
          <label htmlFor='repeatPassword'></label>
          <input
            type='password'
            name='repeat_password'
            placeholder='Repeat Password'
            onChange={updateRepeatPassword}
            className='box-input-log'
            value={repeatPassword}
          ></input>
          <div className='error-message'>
            {hasSubmitted ? passwordRepeatError : ''}
          </div>
        </div>
        <button className='signup-submit-button' type='submit'>Create Account</button>
        <p className="signup-toggle">
          Have an account? {' '}‎ {' '} {' '} {' '} {' '}
          <span
            style={{
              fontSize: '14px',
              cursor: 'pointer',
              color: '#1c36fc',
            }}
            onClick={switchToLogin}
          >
             {'  '} ‎ {' '}
            Log in
          </span>
        </p>
        <p className='captcha'>
          By signing up, you agree to our Privacy Policy, Cookie Policy  {'  '}
          and Terms of Use.
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
