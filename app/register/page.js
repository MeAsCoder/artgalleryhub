// pages/register.js
"use client"
import { useState } from 'react'; // Import useState
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
  // State to store form values and errors
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    occupation: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    email: '',
    country: '',
    maritalStatus: '',
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle form submission logic here
      console.log("Form submitted", formData);
    }
  };

  return (
    <div>
     

      <div className="container mx-auto mt-12 px-4 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-500 ">Register</h1>

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className={`input input-bordered w-full ${errors.firstName ? 'border-red-500' : ''}`}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className={`input input-bordered w-full ${errors.lastName ? 'border-red-500' : ''}`}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
            </div>

            {/* Occupation */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
                Occupation
              </label>
              <select
                className={`select select-bordered w-full ${errors.occupation ? 'border-red-500' : ''}`}
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              >
                <option value="">Select Occupation</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Artist">Artist</option>
                {/* Add more options as needed */}
              </select>
              {errors.occupation && <p className="text-red-500 text-xs italic">{errors.occupation}</p>}
            </div>

            {/* Date of Birth */}
            <div className="mb-4 grid grid-cols-3 gap-2">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dobDay">
                  Day
                </label>
                <input
                  className={`input input-bordered w-full ${errors.dobDay ? 'border-red-500' : ''}`}
                  id="dobDay"
                  name="dobDay"
                  type="number"
                  placeholder="DD"
                  min="1"
                  max="31"
                  value={formData.dobDay}
                  onChange={handleChange}
                />
                {errors.dobDay && <p className="text-red-500 text-xs italic">{errors.dobDay}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dobMonth">
                  Month
                </label>
                <input
                  className={`input input-bordered w-full ${errors.dobMonth ? 'border-red-500' : ''}`}
                  id="dobMonth"
                  name="dobMonth"
                  type="number"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={formData.dobMonth}
                  onChange={handleChange}
                />
                {errors.dobMonth && <p className="text-red-500 text-xs italic">{errors.dobMonth}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dobYear">
                  Year
                </label>
                <input
                  className={`input input-bordered w-full ${errors.dobYear ? 'border-red-500' : ''}`}
                  id="dobYear"
                  name="dobYear"
                  type="number"
                  placeholder="YYYY"
                  value={formData.dobYear}
                  onChange={handleChange}
                />
                {errors.dobYear && <p className="text-red-500 text-xs italic">{errors.dobYear}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`input input-bordered w-full ${errors.email ? 'border-red-500' : ''}`}
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>

            {/* Country of Residence */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                Country of Residence
              </label>
              <select
                className={`select select-bordered w-full ${errors.country ? 'border-red-500' : ''}`}
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                {/* Add more countries as needed */}
              </select>
              {errors.country && <p className="text-red-500 text-xs italic">{errors.country}</p>}
            </div>

            {/* Marital Status */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maritalStatus">
                Marital Status
              </label>
              <select
                className={`select select-bordered w-full ${errors.maritalStatus ? 'border-red-500' : ''}`}
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                {/* Add more statuses as needed */}
              </select>
              {errors.maritalStatus && <p className="text-red-500 text-xs italic">{errors.maritalStatus}</p>}
            </div>

            {/* Newsletter Subscription */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                className="mr-2"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label htmlFor="newsletter" className="text-gray-700 text-sm">
                I would like to receive email communication and newsletters
              </label>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className=" w-full bg-red-500 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600">
             Have an account?{' '}
            <a href="/login" className="text-rose-400 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
