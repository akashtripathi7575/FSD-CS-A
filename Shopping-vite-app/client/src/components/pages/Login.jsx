import React, { useState } from 'react';

export const Login = () => {
  const [values, setValues] = useState({ username: '', password: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Logged in (demo) as ' + values.username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username: </label>
          <input name="username" value={values.username} onChange={onChange} />
        </div>
        <div>
          <label>Password: </label>
          <input name="password" type="password" value={values.password} onChange={onChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
