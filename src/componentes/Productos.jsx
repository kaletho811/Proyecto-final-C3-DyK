import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Producto from './Producto';
import '../estilos/productos.scss';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('all');
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProductos(res.data.products);
        setFiltrados(res.data.products);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    let resultado = productos;

    if (categoria !== 'all') {
      resultado = resultado.filter(p => p.category === categoria);
    }

    if (busqueda.trim() !== '') {
      resultado = resultado.filter(p =>
        p.title.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    setFiltrados(resultado);
  }, [busqueda, categoria, productos]);

  return (
    <div className="contenedor-productos">
      <div className="filtros">
        <input
          type="text"
          placeholder="🔎 Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input-busqueda"
        />

        <select
          onChange={(e) => setCategoria(e.target.value)}
          className="dropdown-categorias"
        >
          <option value="all">Todas las categorías</option>
          <option value="beauty">Maquillaje</option>
          <option value="furniture">Muebles</option>
          <option value="fragrances">Perfumes</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>

      <div className="productos-grid">
        {filtrados.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Productos;
