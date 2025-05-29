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
          <Title addClass="text-[40px]">YemekExpress Hakkında</Title>
          <p className="my-5 flex flex-col items-center">
            YemekExpress, modern ve güvenilir bir yemek sipariş platformudur. 
            Lezzetli ve taze yemekleri en hızlı şekilde kapınıza kadar getiren 
            ekibimizle hizmet veriyoruz. Geniş menü çeşitliliğimiz ve kaliteli 
            malzemelerimizle her damak zevkine hitap ediyoruz. Hamburgerler, 
            pizzalar, makarnalar, salatalar ve daha birçok lezzetli seçeneğimiz 
            bulunmaktadır. Vegan ve vejetaryen alternatifleriyle sağlıklı 
            beslenme ihtiyaçlarınızı da karşılıyoruz. YemekExpress ile her öğün 
            bir zevk haline gelir!
          </p>
          <button className="btn-primary">Devamını oku</button>
        </div>
      </div>
    </div>
  );
};

export default About;
