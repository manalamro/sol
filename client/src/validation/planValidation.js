import * as Yup from 'yup';

export const planValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .positive('Price must be positive')
    .required('Price is required'),
  interval: Yup.string().required('Interval is required'),
  description: Yup.string().required('Description is required'),
  features: Yup.string().required('At least one feature is required'),
  svgColor: Yup.string()
    .matches(/^#([0-9A-F]{3}){1,2}$/i, 'Enter a valid hex color')
    .required('SVG color is required'),
  link: Yup.string()
    .url('Enter a valid URL')
    .required('Link is required'),
});
