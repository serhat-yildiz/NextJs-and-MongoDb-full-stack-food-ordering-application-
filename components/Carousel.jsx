import Image from 'next/image';
import Title from './ui/Title';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Marmara Uni Fast Food</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Araştırma yaparken karnınız mı acıktı? Marmara Üniversitesi Fast
              Food, lezzetli ve hızlı yemekler sunan birinci sınıf bir
              seçenektir. Öğrenci dostu menümüz, zengin çeşitliliği ve uygun
              fiyatlarıyla dikkat çekmektedir.
            </p>
            <button className="btn-primary">şimdi sipariş ver</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Kaliteli malzemeler </Title>
            <p className="text-sm sm:w-2/5 w-full">
              Kaliteli malzemeler kullanarak hazırlanan menümüzde, hamburgerler,
              sandviçler, pizzalar, makarnalar ve daha birçok lezzetli seçenek
              bulunmaktadır. Her damak zevkine hitap eden çeşitler arasında,
              vegan ve vejetaryen alternatifler de bulunmaktadır. Sağlıklı
              beslenmeye önem verenler için taze salatalar ve meyve tabakları da
              sunuyoruz.
            </p>
            <button className="btn-primary">şimdi sipariş ver</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
