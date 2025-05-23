import { useState } from 'react';

export default function Registro() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manejarRegistro = (e) => {
    e.preventDefault();

    // Validación manual
    if (!usuario.trim() || !email.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    alert(`Usuario ${usuario} registrado exitosamente.`);
    // Aquí puedes continuar con lógica de registro
  };

  return (
    <form onSubmit={manejarRegistro}>
      <h2>Registro</h2>
      <input
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}
