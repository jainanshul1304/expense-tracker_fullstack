import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';

function Login() {
  const { login, error, setError } = useGlobalContext();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Dummy validation (replace with real API in future)
    if (password === 'demo123') {
      login({ name });
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <LoginStyled>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(null);
          }}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background: #fff;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0px 8px 20px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 300px;

    h2 {
      margin-bottom: 0.5rem;
      text-align: center;
    }

    input {
      padding: 0.7rem 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
    }

    button {
      padding: 0.7rem 1rem;
      background: var(--color-green);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s ease;

      &:hover {
        background: #28a745;
      }
    }

    .error {
      color: red;
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

export default Login;
