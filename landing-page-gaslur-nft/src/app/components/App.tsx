import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ProductCard from './ProductCard';
import Footer from './Footer';
import '../dist/styles.min.css'


function App() {
  return (
    <div>
      
      <body className="cor-fundo-site">
        <Header />
        <HeroSection />
        <section>
          <div className="container">
            <div className="menusection4">
              <div>
                <p className="colorletra2 eas24">Discover</p>
              </div>
              <div className="menusection4a">
                
              </div>
            </div>
            <div className="row">
              
              <ProductCard imgSrc="/img/foto6.png" title="Lorem Ipsum" price="1.20 Weth" endTime="01.34.45" />
              <ProductCard imgSrc="/img/foto7.png" title="Dolor sit amet" price="0.21 Weth" endTime="01.34.45" />
              <ProductCard imgSrc="/img/foto8.png" title="Dignissim" price="0.01 Weth" endTime="56.44.45" />
              <ProductCard imgSrc="/img/foto9.png" title="Amet pellentesq.." price="0.55 Weth" endTime="01.34.45" />
              <ProductCard imgSrc="/img/foto10.png" title="Lorem Ipsum" price="1.20 Weth" endTime="01.34.45" />
              <ProductCard imgSrc="/img/foto11.png" title="Dolor sit amet" price="0.21 Weth" endTime="01.34.45" />
              <ProductCard imgSrc="/img/foto12.png" title="Dignissim" price="0.01 Weth" endTime="56.44.45" />
              <ProductCard imgSrc="/img/foto13.png" title="Amet pellentesq.." price="0.55 Weth" endTime="01.34.45" />
            </div>
            <div className="eas3 ">
              <button className="buttonsection4 cor-fundo-site">
                <a className="p1 colorletra1" href="https://google.com">Load more</a>
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </body>
    </div>
  );
}

export default App;