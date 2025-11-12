import React from 'react';

export const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Username: </label>
          <input name="username" />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Password: </label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
