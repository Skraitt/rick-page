import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Lorem from '../components/Lorem';
import Search from '../components/Search';
import '../assets/styles/App.scss';

export default function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Lorem />
        <Search />
      </main> 
      <Footer />
    </>
  )
}
