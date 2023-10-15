import React from 'react'

import Slider from '../../components/slider/Slider'
import ProductList from '../../components/productList/ProductList';

const Home = () => {
 
  return (
    <div>
      <Slider />
      <section>
        <ProductList />
      </section>
    </div>
  )
}

export default Home