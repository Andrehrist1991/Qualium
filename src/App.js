import React, { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import './App.css';

import { setProducts } from './redux/actions/products';
import { setProductsCart } from './redux/actions/cart';

import {MainPage, CreatePage, EditPage, CartPage } from '../src/pages';
import { Header } from '../src/components'

function App() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastItem - itemsPerPage;

  const fetchProducts = async () => {
    await axios.get(`/products`).then(({ data }) => {
        dispatch(setProducts(data));
    });
    await axios.get(`/cart`).then(({ data }) => {
        dispatch(setProductsCart(data));
    });
  }

  React.useEffect(() => {
      fetchProducts();
  }, []);

  const { items } = useSelector(({ products }) => {
      return {
          items: products.items
      }
  });


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={() => <MainPage items={items} indexOfFirstPost={indexOfFirstPost} indexOfLastItem={indexOfLastItem} paginate={paginate}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalItems={items.length} />} exact />
        <Route path="/create" component={CreatePage} exact />
        <Route path="/edit" component={EditPage} exact />
        <Route path="/cart" component={() => <CartPage paginate={paginate}
                indexOfFirstPost={indexOfFirstPost}
                indexOfLastItem={indexOfLastItem}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalItems={items.length} />} exact />
      </div>
    </main>
  );
}

export default App;
