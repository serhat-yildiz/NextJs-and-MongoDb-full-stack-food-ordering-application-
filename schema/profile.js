import * as Yup from 'yup';

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required('Tam ad zorunludur.')
    .min(3, 'Tam ad en az 3 karakter olmalıdır.'),
  phoneNumber: Yup.string()
    .required('Telefon Numarası zorunludur.')
    .min(10, 'Telefon numarası en az 10 karakter olmalıdır.'),
  email: Yup.string()
    .required('E-posta zorunludur.')
    .email('Geçersiz e-posta adresi.'),
  address: Yup.string().required('Adres zorunludur.'),
  job: Yup.string().required('Meslek zorunludur.'),
  bio: Yup.string().required('Biyografi zorunludur.'),
});
