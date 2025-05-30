import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddPlanModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const initialValues = {
    name: '',
    price: '',
    interval: '',
    description: '',
    features: '',
    svgColor: '',
    link: '',
  };

  const validationSchema = Yup.object({
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

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Plan</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {[
              { name: 'name', placeholder: 'Name' },
              { name: 'price', placeholder: 'Price' },
              { name: 'interval', placeholder: 'Interval (e.g., Month)' },
              { name: 'description', placeholder: 'Description' },
              { name: 'features', placeholder: 'Features (comma separated)' },
              { name: 'svgColor', placeholder: 'SVG Color (e.g., #FBBA10)' },
              { name: 'link', placeholder: 'Link (e.g., https://calendly.com)' },
            ].map(({ name, placeholder }) => (
              <div key={name}>
                <Field
                  name={name}
                  placeholder={placeholder}
                  className="w-full border border-gray-400 p-2 rounded"
                />
                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            ))}
            <p className="text-xs text-gray-600">Separate features with commas</p>

            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Plan
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddPlanModal;
