import { useReducer } from 'react';
import classes from './Form.module.css';

function Form() {

  const initialState = {
    enteredEmail: '',
    emailIsValid: false,
    enteredPassword: '',
    passwordIsValid: false
  }

  const EMAIL_CHANGED = 'EMAIL_CHANGED';
  const PASSWORD_CHANGED = 'PSWRD_CHANGED';
  function formStateReducer (state, action) {
    if (action.type === EMAIL_CHANGED) {
      return {
        ...state,
        enteredEmail: action.value,
        emailIsValid: action.value.includes('@')
      }
    }
    if (action.type === PASSWORD_CHANGED) {
      return {
        ...state,
        enteredPassword: action.value,
        passwordIsValid: action.value.trim().length > 7
      }
    }
  }

  const [state, dispatch] = useReducer(formStateReducer, initialState);

  const formIsValid = state.emailIsValid && state.passwordIsValid;

  function changeEmailHandler(event) {
    const value = event.target.value;
    dispatch({type: EMAIL_CHANGED, value: value});
  }

  function changePasswordHandler(event) {
    const value = event.target.value;
    dispatch({type: PASSWORD_CHANGED, value: value});
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      alert('Invalid form inputs!');
      return;
    }

    console.log('Good job!');
    console.log(state.enteredEmail, state.enteredPassword);
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={changeEmailHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={changePasswordHandler} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
