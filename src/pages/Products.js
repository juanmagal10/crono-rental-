import React from 'react'

const Products = ({categoria}) => {
  // console.log(categoria.nombre)
  return (
    <div>
      {categoria.map((item, index) => {
        return (
               <div className="item-container" key={index}>
          <h3>{item}</h3>
      </div>
        )
   
      })}
    </div>
  )
}

export default Products
