import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className='ProductItem'>
    <img></img>
    <p>{title}</p>
    <p>&#36;{price} stock:  {inventory ? `${inventory}` : null}</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
