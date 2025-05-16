import { useState } from 'react';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const manejarLogin = (e) => {
    e.preventDefault();
    alert(`Bienvenido, ${usuario}!`);
  };

  return (
    <form onSubmit={manejarLogin}>
      <h2>Iniciar sesión</h2>
      <input placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Ingresar</button>
    </form>
  );
}