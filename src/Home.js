import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt=""
            />

            <div className='home__row'>
                <Product 
                id="12321341"
                title='The lean startup'
                price={29.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={5}/>
                <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for baking, stylish kitchen, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://m.media-amazon.com/images/I/718Bxs69wUL._SX522_.jpg"/>
            </div>

            <div className='home__row'>
            <Product
                id="4903850"
                title="Samsung LC49RG 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://m.media-amazon.com/images/I/81z4qLkLBnL._SX679_.jpg"/>
                <Product
                id="23445930"
                title="Amazon Echo"
                price={98.99}
                rating={5}
                image="https://m.media-amazon.com/images/G/31/kindle/journeys/k8d24om2UAWmhuan2BfdOqBAPyrpejJdMwS8GVX2qKUs3D/NGY1MGFhYzgt._CB613401717_.png"/>
            <Product
                id="3254354345"
                title="New Apple iPad Pro"
                price={598.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/41sRLpJD1AL._SY445_SX342_QL70_FMwebp_.jpg"/>
            </div>

            <div className='home__row'>
            <Product
                id="123"
                title="Samsung s21 FE 128gb"
                price={399.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/8131pwAojZL._AC_UY327_FMwebp_QL65_.jpg"/>
            </div>

        </div>

    </div>
  )
}

export default Home