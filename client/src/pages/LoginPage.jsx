import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import useForm from '../hooks/useForm'; // your custom form hook
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setSubmitting,
    setFieldError,
  } = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const trimmedValues = {
        username: values.username.trim(),
        password: values.password.trim(),
      };

      console.log('Submitting login form with:', trimmedValues); // DEBUG

      try {
        const response = await axios.post('http://localhost:3000/api/login', trimmedValues);
        const { token, role } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        login(token, role);
        navigate('/haptic');
      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message); // DEBUG
        setFieldError('general', 'Invalid username or password');
        setSubmitting(false);
      }
    },
  });


  const handleGuestLogin = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    login('', 'guest');  // update context state: no token, role='guest'
    navigate('/haptic');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full border h-10 ${
                errors.username && touched.username ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.username && touched.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full border h-10 ${
                errors.password && touched.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {errors.general && (
            <p className="text-red-500 text-sm mb-3 text-center">{errors.general}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Or</p>
          <button
            onClick={handleGuestLogin}
            className="mt-2 text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
