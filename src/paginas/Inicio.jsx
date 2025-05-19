import React, { useEffect, useState } from 'react';
import Producto from '../componentes/Producto';
import Productos from '../componentes/Productos';
const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data.products);
        setCargando(false);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;

  return (
    <div className="productos-lista">
      <Productos />
      
      
    </div>
  );
};

export default Inicio;
