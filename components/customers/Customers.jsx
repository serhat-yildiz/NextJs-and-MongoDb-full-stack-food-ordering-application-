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
      <Title addClass="text-[40px] text-center">Müşteri Yorumları</Title>
      <Slider {...settings}>
        <CustomerItem
          description="YemekExpress'ten siparişlerim her zaman taze ve lezzetli geliyor. Özellikle pizzaları harika! Hızlı teslimat ve güler yüzlü kurye ekibi için teşekkürler. Kesinlikle tavsiye ederim."
          name={'Ahmet Kaya'}
          rating={5}
        />
        <CustomerItem
          description="Ailecek severek kullanıyoruz. Menü çeşitliliği çok geniş, herkesin sevdiği bir şeyler bulabiliyor. Vegan seçenekleri de mükemmel. Fiyatlar da gayet uygun."
          name={'Zeynep Öztürk'}
          rating={5}
        />
        <CustomerItem
          description="İş yerinde öğle aralarında sürekli sipariş veriyoruz. 30 dakikada geldiği söylenen siparişler gerçekten zamanında geliyor. Kalite hiç düşmüyor."
          name={'Mehmet Şahin'}
          rating={4}
        />
        <CustomerItem
          description="Hamur işleri konusunda gerçekten başarılılar. Mantı ve börekler ev yapımı gibi lezzetli. Müşteri hizmetleri de çok ilgili ve çözüm odaklı."
          name={'Fatma Demir'}
          rating={5}
        />
        <CustomerItem
          description="Öğrenci olarak bütçe dostu menüleri çok beğeniyorum. Porsiyonlar doyurucu ve lezzetli. YemekExpress sayesinde karnım tok kalpim de tok!"
          name={'Can Yılmaz'}
          rating={4}
        />
        <CustomerItem
          description="Sağlıklı beslenmeye dikkat ediyorum. Taze salata seçenekleri ve düşük kalorili menüleri ile beklentilerimi karşılıyor. Besin değerleri de belirtilmiş."
          name={'Elif Aksoy'}
          rating={5}
        />
      </Slider>
    </div>
  );
};

export default Customers;
