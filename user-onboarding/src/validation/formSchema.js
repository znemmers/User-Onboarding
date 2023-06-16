import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(5, 'Username must be at least 5 character long!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .requred('Email is required!'),
    password: yup
        .string()
        .required('Password is required!')
        .min(8, 'Password must be at least 8 characters long!'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept!')
})
export default formSchema;