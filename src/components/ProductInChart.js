import React from 'react'
import PropTypes from 'prop-types'

const ProductInChart = ({ price, inventory, title }) => (
  <div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
)

ProductInChart.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default ProductInChart
