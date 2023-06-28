import React from 'react';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Service from './components/Home/Service';
import SuccessStories from './components/Home/SuccessStories';


function HomePage() {
    return (
      <>
      <Navbar/>
      <Header/>
      <Service/>
      <SuccessStories/>
      <Footer/>
      </>
    );
  }

export default HomePage