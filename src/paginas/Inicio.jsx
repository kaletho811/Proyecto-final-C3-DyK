import { useEffect, useState } from 'react';
import Producto from '../componentes/Producto';
import Filtro from '../componentes/Filtro';

export default function Inicio({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetchProductos();
    fetchCategorias();
  }, []);

  useEffect(() => {
    if (filtro === '') {
      fetchProductos();
    } else {
      fetch(`https://dummyjson.com/products/category/${filtro}`)
        .then((res) => res.json())
        .then((data) => setProductos(data.products));
    }
  }, [filtro]);

  const fetchProductos = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProductos(data.products));
  };

  const fetchCategorias = () => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategorias(data));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <Filtro categorias={categorias} filtrar={setFiltro} />
      <div className="productos-grid">
        {productos.map((prod) => (
          <Producto key={prod.id} producto={prod} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  );
}
