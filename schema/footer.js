import * as Yup from 'yup';

export const footerSchema = Yup.object({
  location: Yup.string().required('Konum zorunludur.'),
  phoneNumber: Yup.string()
    .required('Telefon Numarası zorunludur.')
    .min(10, 'Telefon numarası en az 10 karakter olmalıdır.'),
  email: Yup.string()
    .required('E-posta zorunludur.')
    .email('Geçersiz e-posta adresi.'),
  desc: Yup.string().required('Açıklama zorunludur.'),
  day: Yup.string().required('Gün zorunludur.'),
  time: Yup.string().required('Zaman zorunludur.'),
});
