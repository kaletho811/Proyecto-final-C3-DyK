export default function Filtro({ categorias, filtrar }) {
  return (
    <select onChange={(e) => filtrar(e.target.value)}>
      <option value="">Todas</option>
      {categorias.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}