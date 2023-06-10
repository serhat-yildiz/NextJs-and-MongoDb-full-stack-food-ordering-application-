import Image from 'next/image';
import Title from './ui/Title';

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">Biz Marmara üniversitesiyiz</Title>
          <p className="my-5 flex flex-col items-center">
            Araştırma yaparken karnınız mı acıktı? Marmara Üniversitesi Fast
            Food, lezzetli ve hızlı yemekler sunan birinci sınıf bir seçenektir.
            Öğrenci dostu menümüz, zengin çeşitliliği ve uygun fiyatlarıyla
            dikkat çekmektedir. Kaliteli malzemeler kullanarak hazırlanan
            menümüzde, hamburgerler, sandviçler, pizzalar, makarnalar ve daha
            birçok lezzetli seçenek bulunmaktadır. Her damak zevkine hitap eden
            çeşitler arasında, vegan ve vejetaryen alternatifler de
            bulunmaktadır. Sağlıklı beslenmeye önem verenler için taze salatalar
            ve meyve tabakları da sunuyoruz.
          </p>
          <button className="btn-primary">Devamını oku</button>
        </div>
      </div>
    </div>
  );
};

export default About;
