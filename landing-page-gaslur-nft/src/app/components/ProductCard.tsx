import React from 'react';

interface ProductCardProps {
  imgSrc: string;
  title: string;
  price: string;
  endTime: string;
}

function ProductCard(props: ProductCardProps) {
  const { imgSrc, title, price, endTime } = props;

  return (
    <div className="mgt-4 xs-12 sm-6 md-3 lg-3">
      <img className="eas13" src={imgSrc} alt="Product Image" />
      <div className="eas2 mgt-1">
        <p className="p4 colorletra2">{title}</p>
        <p className="p5 colorletra2">{price}</p>
      </div>
      <hr className=" hr1 mgb-4" />
      <div className="eas2 ">
        <p className="p6 colorletra1">Ends in {endTime}</p>
        <button className="buttondoscardscomimg  pdl-2 pdr-2 ">
          <a href="https://google.com" className="p5 colorletra3 mgb-0">Buy</a>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;