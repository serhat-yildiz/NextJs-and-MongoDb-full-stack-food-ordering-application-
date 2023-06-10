import * as Yup from 'yup';

export const newPasswordSchema = Yup.object({
password: Yup.string()
.required('Şifre zorunludur.')
.min(8, 'Şifre en az 8 karakter olmalıdır.'),
confirmPassword: Yup.string()
.required('Şifre tekrarı zorunludur.')
.oneOf([Yup.ref('password'), null], 'Şifreler eşleşmelidir.'),
});