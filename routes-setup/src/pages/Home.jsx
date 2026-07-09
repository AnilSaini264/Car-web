import React from 'react'
import CarStock from '../components/CarStock'
import CarDetail from '../components/CarDetail'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import Customer from '../components/Customer'
import Footer from '../components/footer'
// import Image from './Contact/Image/Car.jpg'


const Home = () => {
  return (
    <>
      
      <div className="app-shell">
        <section>
          <Hero/>
        </section>
      <section className="section-heading">
      
          <h1>Explore All Vehicles</h1>
      </section>

      <section className="car-grid">
          <CarStock image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosf1hrtoQs1fihL7zSmtEIWGAaFVZJNxZyL1VaYphYM_KGc5qHLFz-WlG&s=10" name="Fort Transit -2021"  b1="2500 Miles" b2="Diesel" b3="Manual" price="$22,000" />
          <CarStock image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPuAaNO8gmSk7UEOrmFVoyMNzj3E7fEMaBoA6sTY8Hw&s=10" name="New GLC -2023" b1="200 Miles" b2="Diesel" b3="Manual" price="$97,000" />
          <CarStock image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEVL1DYuUOZqkINIE8CAOdl1KsPKmaFumdqS4IX5UMg&s=10" name="Audi 23 -NEW" b1="1400 Miles" b2="Diesel" b3="Auto" price="$93,000" />
          <CarStock image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyPwiNRi8sM7vVfC-ngR9E-1hJxocqwnMgemHnuUDSQ&s=10" name="Corija -2022" b1="200 Miles" b2="Diesel" b3="Mannim" price="$59,000" />
          <CarStock image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2MVf68sVIngmoUGZu5kHzz_Feyh7AmTKATjoXB0iBQ&s=10" name="Aunio BG54" b1="1300 Miles" b2="Diesel" b3="Automatic" price="$22,000" />
          <CarStock image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOM7YEQmSH-1cOGRoXVEtNbXZi37E3NIYPZ_a1lj5WA&s=10" name="Fort Alion -2008" b1="2870 Miles" b2="Diesel" b3="Manual" price="$62,000" />
          <CarStock image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdV4Uu7-BSlzoK0Ds5jZeqI3G92U-nToYPJWlTGLMRrA&s" name="Aunmif56D - 2007" b1="2200 Miles" b2="Diesel" b3="Automatic" price="$22,000" />
        </section>

        <section className="detail-section">
          <CarDetail />
        </section>
        <section style={{display: "flex", gap: "20px"}}>
          <ChooseUs heading="Special Financing Offers"/>
          <ChooseUs heading="Trusted Car Dealership"/>
          <ChooseUs heading="Transparenent Pricing"/>
          <ChooseUs heading="Expert"/>
        </section>
        <section style={{display: "flex", gap: "20px"}}>
          <Customer name="Ali TUFAN" role="Designer" feedback="I'd suggest Macklin Motors Nissan Glasgow South to a friend." image="https://tse1.mm.bing.net/th/id/OIP.UWImNkoyZAQKL3s9_O_PbwHaE7?r=0&w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3" />
          <Customer name="John Doe" role="Engineer" feedback="Great service and competitive prices!" image="https://th.bing.com/th/id/OIP.M0Uak0pyXetvVhkUU-RMOAHaEJ?w=286&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
          <Customer name="Jane Smith" role="Manager" feedback="Highly recommended for their transparency and  expertise." image="https://th.bing.com/th/id/OIP.DBg04dCvFZjQZdz_viOAagHaEy?w=263&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
        </section>
      </div>
    </>
  )
}

export default Home
