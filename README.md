# 🍕 YemekExpress - Modern Yemek Sipariş Platformu

**YemekExpress**, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir yemek sipariş platformudur. Bu full-stack uygulama, kullanıcıların kolayca yemek siparişi vermesini, restoran sahiplerinin siparişleri yönetmesini ve rezervasyon yapılmasını sağlar.

## 🌟 Özellikler

### 👥 Kullanıcı Özellikleri
- ✅ **Hesap Yönetimi**: Kayıt olma, giriş yapma, profil düzenleme
- ✅ **Sosyal Giriş**: GitHub ile giriş desteği
- ✅ **Ürün Kataloğu**: Kategorilere göre filtrelenmiş yemek menüsü
- ✅ **Sepet Sistemi**: Ürün ekleme, miktar ayarlama, toplam hesaplama
- ✅ **Sipariş Takibi**: Gerçek zamanlı sipariş durumu takibi
- ✅ **Rezervasyon**: Masa rezervasyon sistemi
- ✅ **Arama**: Hızlı ürün arama özelliği
- ✅ **Müşteri Yorumları**: 5 yıldızlı rating sistemi
- ✅ **Responsive Tasarım**: Mobil ve desktop uyumlu

### 🔧 Admin Özellikleri
- ✅ **Ürün Yönetimi**: Ürün ekleme, düzenleme, silme
- ✅ **Sipariş Yönetimi**: Sipariş durumu güncelleme
- ✅ **Kategori Yönetimi**: Ürün kategorilerini düzenleme
- ✅ **Dashboard**: Yönetim paneli
- ✅ **Güvenli Giriş**: Token tabanlı admin girişi

### 🛍️ E-Ticaret Özellikleri
- ✅ **Shopping Cart**: Redux ile yönetilen sepet sistemi
- ✅ **Ürün Varyantları**: Boyut seçimi (Küçük, Orta, Büyük)
- ✅ **Ekstra Seçenekler**: Ürünlere ekstra malzeme ekleme
- ✅ **Fiyat Hesaplama**: Dinamik fiyat hesaplama
- ✅ **Sipariş Geçmişi**: Kullanıcı sipariş geçmişi

## 🚀 Teknolojiler

### Frontend
- **[Next.js](https://nextjs.org/)** - React framework (v12.2.5)
- **[React](https://reactjs.org/)** - UI kütüphanesi (v18.2.0)
- **[TailwindCSS](https://tailwindcss.com/)** - CSS framework
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - State management
- **[Formik](https://formik.org/)** - Form yönetimi
- **[Yup](https://github.com/jquense/yup)** - Form validasyonu
- **[React Slick](https://react-slick.neostack.com/)** - Carousel komponenti
- **[React Icons](https://react-icons.github.io/react-icons/)** - İkon seti

### Backend
- **[MongoDB](https://www.mongodb.com/)** - NoSQL veritabanı
- **[Mongoose](https://mongoosejs.com/)** - MongoDB ODM
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js/)** - Şifre hashleme
- **[Axios](https://axios-http.com/)** - HTTP istemcisi

### Deployment & Tools
- **[Cloudinary](https://cloudinary.com/)** - Resim yönetimi
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[ESLint](https://eslint.org/)** - Code linting

## 📦 Kurulum

### Gereksinimler
- Node.js (v14 veya üstü)
- npm veya yarn
- MongoDB hesabı
- Cloudinary hesabı (resim yükleme için)

### 1. Projeyi klonlayın
```bash
git clone https://github.com/darthDevo/YemekExpress.git
cd YemekExpress
```

### 2. Bağımlılıkları yükleyin
```bash
npm install
# veya
yarn install
```

### 3. Ortam değişkenlerini ayarlayın
`.env.local` dosyası oluşturun:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# GitHub OAuth (Opsiyonel)
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_admin_password
ADMIN_TOKEN=your_admin_token

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Geliştirme sunucusunu başlatın
```bash
npm run dev
# veya
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

```
YemekExpress/
├── components/           # React bileşenleri
│   ├── admin/           # Admin paneli bileşenleri
│   ├── customers/       # Müşteri yorumları
│   ├── form/            # Form bileşenleri
│   ├── layout/          # Layout bileşenleri
│   ├── product/         # Ürün bileşenleri
│   ├── profile/         # Profil bileşenleri
│   └── ui/              # UI bileşenleri
├── pages/               # Next.js sayfalar
│   ├── api/             # API routes
│   │   ├── auth/        # Authentication endpoints
│   │   ├── orders/      # Sipariş API'leri
│   │   ├── products/    # Ürün API'leri
│   │   └── users/       # Kullanıcı API'leri
│   ├── admin/           # Admin sayfaları
│   ├── auth/            # Authentication sayfaları
│   ├── cart/            # Sepet sayfası
│   └── product/         # Ürün detay sayfaları
├── models/              # MongoDB modelleri
├── redux/               # Redux store ve slices
├── schema/              # Validasyon şemaları
├── styles/              # CSS dosyaları
└── util/                # Yardımcı fonksiyonlar
```

## 🎯 Kullanım

### Kullanıcı İşlemleri
1. **Kayıt/Giriş**: `/auth/register` veya `/auth/login` sayfalarından hesap oluşturun
2. **Ürün Arama**: Ana sayfada kategorilere göz atın veya arama yapın
3. **Sepete Ekleme**: Ürün detay sayfasından sepete ekleyin
4. **Sipariş Verme**: Sepet sayfasından siparişinizi tamamlayın
5. **Rezervasyon**: `/reservation` sayfasından masa rezervasyonu yapın

### Admin İşlemleri
1. **Admin Girişi**: `/admin` sayfasından giriş yapın
2. **Ürün Yönetimi**: Yeni ürünler ekleyin, mevcut ürünleri düzenleyin
3. **Sipariş Takibi**: Siparişlerin durumunu güncelleyin
4. **Kategori Yönetimi**: Ürün kategorilerini düzenleyin

## 🔧 API Endpoints

### Kullanıcı API'leri
- `GET /api/users` - Tüm kullanıcıları listele
- `POST /api/users/register` - Yeni kullanıcı kaydı
- `PUT /api/users/[id]` - Kullanıcı bilgilerini güncelle

### Ürün API'leri
- `GET /api/products` - Tüm ürünleri listele
- `GET /api/products/[id]` - Tek ürün detayı
- `POST /api/products` - Yeni ürün ekle (Admin)
- `DELETE /api/products/[id]` - Ürün sil (Admin)

### Sipariş API'leri
- `GET /api/orders` - Tüm siparişleri listele
- `POST /api/orders` - Yeni sipariş oluştur
- `PUT /api/orders/[id]` - Sipariş durumunu güncelle

## 📱 Responsive Tasarım

YemekExpress, tüm cihazlarda mükemmel çalışacak şekilde tasarlanmıştır:
- 📱 **Mobil**: iPhone, Android cihazlar
- 📱 **Tablet**: iPad, Android tabletler  
- 💻 **Desktop**: Tüm ekran boyutları

## 🔒 Güvenlik

- **Password Hashing**: bcryptjs ile güvenli şifre hashleme
- **JWT Authentication**: NextAuth.js ile güvenli kimlik doğrulama
- **Admin Protection**: Token tabanlı admin koruması
- **Input Validation**: Yup ile form validasyonu

## 🌐 Deployment

### Vercel ile Deploy

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub repository'nizi bağlayın
3. Ortam değişkenlerini ekleyin
4. Deploy butonuna tıklayın

### Manuel Deploy

```bash
npm run build
npm run start
```

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Serhat Yıldız**
- Website: [serhatdev.vercel.app](https://serhatdev.vercel.app/)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - Amazing React framework
- [MongoDB](https://www.mongodb.com/) - Powerful database
- [TailwindCSS](https://tailwindcss.com/) - Beautiful styling
- [Vercel](https://vercel.com/) - Easy deployment

---

⭐ Bu projeyi beğendiyseniz star vermeyi unutmayın!