import * as Yup from 'yup';

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required('Tam ad zorunludur.')
    .min(3, 'Tam ad en az 3 karakter olmalıdır.'),
  phoneNumber: Yup.string()
    .required('Telefon numarası zorunludur.')
    .min(10, 'Telefon numarası en az 10 karakter olmalıdır.'),
  email: Yup.string()
    .required('E-posta zorunludur.')
    .email('Geçersiz e-posta adresi.'),
  persons: Yup.string().required('Kişi sayısı zorunludur.'),
  date: Yup.string().required('Tarih zorunludur.'),
});
