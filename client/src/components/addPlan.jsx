import React from 'react';
import useForm from '../hooks/useForm';
import { planValidationSchema } from '../validation/planValidation';

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

  const formik = useForm({
    initialValues,
    validationSchema: planValidationSchema,
    onSubmit: (values, actions) => {
      onSubmit(values);
      actions.resetForm();
      onClose();
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Plan</h2>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
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
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border p-2 rounded
                  ${
                    formik.touched[name] && formik.errors[name]
                      ? 'border-red-500'
                      : 'border-gray-400'
                  }`}
              />
              {formik.touched[name] && formik.errors[name] && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors[name]}
                </div>
              )}
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
        </form>
      </div>
    </div>
  );
};

export default AddPlanModal;
