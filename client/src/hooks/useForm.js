// hooks/useForm.js
import { useFormik } from 'formik';

function useForm({ initialValues, validationSchema, onSubmit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik; // returns all Formik props and handlers
}

export default useForm;
