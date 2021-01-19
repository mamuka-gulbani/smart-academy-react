import React, { Component } from 'react'
import products from './products'

function productsList(props) {
    const { handleSubmit, deleteItem } = props
    return (
      <ul>
        {products.map((products) => {
          return (
            <li key={products.key}>
              <button onClick={() => handleSubmit(products)}>buy item</button>
              {products.name} {<products className="isSubmited"></products> ? "submited" : "not"}
              <button onClick={() => deleteItem(products.key)}>delete</button>
            </li>
          )
        })}
      </ul>
    )
  }
  
  export default productsList