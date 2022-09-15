import React, { useState } from 'react';
import Product from '../components/Product/Product';
import './stylesProducts/ProductsStyles.css';
// import { useContext } from 'react'
// import { AppContext} from '../context/dataContext'
import { useParams } from 'react-router-dom';

const Products = ({ categoria }) => {
  // const [titulo, setTitulo]=useState('')
  const urlparams = useParams().productsCategory;
  let titulo = '';
  switch (urlparams) {
    case 'productsPhoto':
      categoria = categoria[0].products;
      titulo = 'Camaras y Lentes';
      break;
    case 'productsLigths':
      categoria = categoria[1].products;
      titulo = 'Iluminación';
      break;
    case 'productsSound':
      categoria = categoria[2].products;
      titulo = 'Sonido';
      break;
  }

  //  const categoriaUrl= images.filter(item => item.url === categoria.url)

  // const AppContext=useContext()
  return (
    <>
      <div className="products-page-container">
        <div className="container">
          <section className="products" id="products-section">
            <h2 className="products-section-title">{titulo}</h2>
            <div className="products-list">
              {categoria.map((item, index) => {
                return (
                  <div key={index} className="product-box">
                    <Product
                      img={item.img}
                      title={item.name}
                      description={item.description}
                      categoria={urlparams}
                      url={item.url}
                      caracteristicas={item.caracteristicas}
                      id={item.id}
                      categoriaArray={categoria}
                    ></Product>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
