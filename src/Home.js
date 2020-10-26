import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_ROW_Muti-title_Mag1._CB1564087979_SY1200_FMJPG_.jpg" />
        <div className="home__row">
          <Product title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={ 133 } rating={ 4 } image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" id={1} />
          <Product title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." price={ 28 } rating={ 3 } image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg" id={2} />
        </div>
        <div className="home__row">
          <Product title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout" price={ 399 } image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg" rating={ 5 } id={3} />
          <Product title="The lean start-up" price={ 160 } image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg" rating={ 4 } />
          <Product title="The lean start-up" price={ 29.99 } image="https://m.media-amazon.com/images/I/51bdMhAVOfL._AC_SY200_.jpg" rating={ 2 } id={4} />
        </div>
        <div className="home__row">
          <Product title="Content here, content here', making it look like readable English" price={ 1000 } image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" rating={ 5 } />
        </div>
      </div>
    </div>
  );
}

export default Home;
