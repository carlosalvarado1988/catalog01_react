import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div className='App'>
    <div className='Header'>
      <h2>Catalogo</h2>
      <hr/>
    </div>
    <div className='Left'>
      <ProductsContainer />
    </div>
    <div className='Right'>
      Description section
    </div>
    <div className='Right'>
      Description section
    </div>
    <div className='Footer'>
      <hr/>
      <CartContainer />
    </div>
  </div>
)

export default App
