import React from 'react';

function HeroSection() {
  return (
    <section className="section1">
      <div className="container">
        <div className="row">
          <div className="xs-12 sm-12 md-12 lg-6">
            <div className="ladoasection1">
              <h1 className="pdb-2 colorletra2 eas12 eas14">
                Discover, collect,<br />
                and charity in <br />
                extraordinary NFT <br />
                marketplace
              </h1>
              <p className="pdb-3 p2 colorletra3 eas14">
                In aenean posuere lorem risus nec. Tempor<br />
                tincidunt aenean purus purus vestibulum nibh mi<br />
                venenatis
              </p>
              <div className="botoessection1">
                <button className="botaosection1a mgr-4 mgb-1">
                  <a className="p3 colorletra2" href="https://www.google.com">Explore</a>
                </button>
                <button className="cor-fundo-site botaosection1b">
                  <a className="p3 colorletra4" href="https://www.google.com">Create</a>
                </button>
              </div>
            </div>
          </div>
          <div className="lg-1"></div>
          <div className="xs-12 sm-12 md-12 lg-5">
            <div className="eas13 ladobsection2">
              <div className="sombra1"></div>
              <div className="sombra2"></div>
              <div className="img1 pdt-3">
                <img className="img1" src="../img/foto1.png" alt="Image 1" />
              </div>
              <div className="laurasection1 pdb-3 pdt-3">
                <div className="fotolaura">
                  <div>
                    <img src="/img/foto-laura.png" alt="Laura" />
                  </div>
                  <div>
                    <p className="colorletra2 eas16 eas1 mgb-0">Laura</p>
                    <p className="colorletra4 eas16 nowrap mgb-0">0.21 Weth</p>
                  </div>
                </div>
                <div className="fotolaurab">
                  <p className="colorletra2 eas16 eas1 nowrap mgb-0">WE ARE HERE</p>
                  <p className="colorletra4 eas16 pd-0 imglaura mgb-0"><img className="mgr-1" src="../img/coracao.svg" alt="Heart" />25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;