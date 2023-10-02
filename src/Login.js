import React, { useState } from 'react';
import './LoginPage.css'; // Importe o arquivo CSS

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aqui você deve implementar a lógica de autenticação, como fazer uma solicitação para o servidor.
    // Por enquanto, vou apenas simular o login bem-sucedido quando o usuário inserir "admin" como nome de usuário e senha.
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <h2>{loggedIn ? `Bem-vindo, ${username}!` : 'Por favor, faça login'}</h2>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Sair</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
