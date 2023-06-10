import * as Yup from 'yup';

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required('Tam ad zorunludur.')
    .min(3, 'Tam ad en az 3 karakter olmalıdır.'),
  email: Yup.string()
    .required('E-posta zorunludur.')
    .email('Geçersiz e-posta adresi.'),
  password: Yup.string()
    .required('Şifre zorunludur.')
    .min(8, 'Şifre en az 8 karakter olmalıdır.'),
  confirmPassword: Yup.string()
    .required('Şifre tekrarı zorunludur.')
    .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmelidir.'),
});
