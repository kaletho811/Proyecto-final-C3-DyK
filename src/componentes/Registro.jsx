import { useState } from 'react';

export default function Registro() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manejarRegistro = (e) => {
    e.preventDefault();
    alert(`Usuario ${usuario} registrado exitosamente.`);
  };

  return (
    <form onSubmit={manejarRegistro}>
      <h2>Registro</h2>
      <input placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Registrarse</button>
    </form>
  );
}