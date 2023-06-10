import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .required('E-posta zorunludur.')
    .email('Geçersiz e-posta adresi.'),
  password: Yup.string()
    .required('Şifre zorunludur.')
    .min(8, 'Şifre en az 8 karakter olmalıdır.'),
});
