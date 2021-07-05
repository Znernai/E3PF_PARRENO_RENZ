/* with the help of the Login.js component it can call the REST API and on successful call it 
will redirect it on the Dashboard component. */ 

import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';

// The stracture of fullpage for Login.js

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("The Username or Password is incorrect, Please try again later.");
    });
  }

  // this is the output that can see if you start the website
  return (
    <div className="log">
      Login<br /><br />
        <div>
          Username<br />
            <input type="text" {...username} autoComplete="new-password" />
        </div>

        <div style={{ marginTop: 10 }}>
          Password<br />
            <input type="password" {...password} autoComplete="new-password" />
        </div>
      {error && <><small style={{ color: 'Black' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;