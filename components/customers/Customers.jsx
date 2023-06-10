import React from 'react';
import Title from '../ui/Title';
import CustomerItem from './CustomerItem';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
      <Title addClass="text-[40px] text-center">Mükemmel kadromuz</Title>
      <Slider {...settings}>
        <CustomerItem
          description="Ercan Erkalkan, genellikle restoran şefine mutfak operasyonlarında destek sağlar. Yemeklerin hazırlanması, sunumu ve kalitesi konularında restoran şefine yardımcı olur. Yemek tariflerinin hazırlanması ve uygulanması konusunda aktif rol alır."
          imgSrc="/images/client1.jpeg"
          name={'Ercan Erkalkan'}
        />
        <CustomerItem
          description="Vedat Topuz, restoran müdürü olarak görev yapan bir kişidir. Restoran müdürü olarak, restoranın günlük işleyişini yönetir, personel yönetimi yapar ve müşteri hizmetlerinden sorumludur. Müşteri memnuniyetini sağlamak, kaliteli hizmet sunmak ve restoranın karlılığını artırmak için stratejiler geliştirir ve uygular."
          imgSrc="/images/client2.png"
          name={'Vedat Topuz'}
        />
        <CustomerItem
          description="Fatih Kazdal, genellikle restoran menüsünü planlar ve yemeklerin lezzetli, estetik ve hijyenik bir şekilde hazırlanmasını sağlar. Mutfak personelinin iş organizasyonunu yönetir, yemeklerin doğru zamanda ve düzgün bir şekilde hazırlanmasını sağlar ve restoranın kalite standartlarını korur."
          imgSrc="/images/clinet3.jpeg"
          name={'Fatih Kazdal'}
        />
      </Slider>
    </div>
  );
};

export default Customers;
