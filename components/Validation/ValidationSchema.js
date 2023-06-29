import * as yup from 'yup';

export const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email('Invalid Email').required('Email is required'),
    phone: yup.string().required('Phone Number is Required'),
  })
  .required();
