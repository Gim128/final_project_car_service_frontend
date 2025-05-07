// src/components/Vehicle/AddVehicleForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddVehicleForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    mobile: '',
    make: '',
    model: '',
    price: '',
    description: '',
    year: '',
    mileage: '',
    images: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const vehicleMakes = ['Toyota', 'Honda', 'Nissan', 'Mitsubishi', 'Suzuki', 'BMW', 'Mercedes'];
  const vehicleModels = {
    Toyota: ['Corolla', 'Prius', 'Camry', 'Land Cruiser'],
    Honda: ['Civic', 'Accord', 'CR-V', 'Vezel'],
    Nissan: ['Sunny', 'Leaf', 'X-Trail'],
    Mitsubishi: ['Lancer', 'Outlander', 'Pajero'],
    Suzuki: ['Swift', 'Alto', 'Wagon R'],
    BMW: ['3 Series', '5 Series', 'X5'],
    Mercedes: ['C-Class', 'E-Class', 'S-Class']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 5 - formData.images.length);
    const newImages = files.map(file => URL.createObjectURL(file));
    setFormData(prev => ({ ...prev, images: [...prev.images, ...newImages] }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile is required';
    if (!formData.make) newErrors.make = 'Make is required';
    if (!formData.model) newErrors.model = 'Model is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.year) newErrors.year = 'Year is required';
    if (!formData.mileage) newErrors.mileage = 'Mileage is required';
    if (formData.images.length === 0) newErrors.images = 'At least one image is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        navigate('/my-ads');
      }, 1500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add Your Vehicle</h1>
      <p className="text-gray-600 mb-8">
        Only list vehicles that are already in Sri Lanka. Ads for vehicles not currently in Sri Lanka will be removed or subject to a fee.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.location ? 'border-red-500' : ''}`}
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>
          </div>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Mobile</h2>
          <div>
            <label className="block text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.mobile ? 'border-red-500' : ''}`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Vehicle info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Make</label>
              <select
                name="make"
                value={formData.make}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.make ? 'border-red-500' : ''}`}
              >
                <option value="">Select Make</option>
                {vehicleMakes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
              {errors.make && <p className="text-red-500 text-sm mt-1">{errors.make}</p>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Model</label>
              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
                disabled={!formData.make}
                className={`w-full p-2 border rounded ${errors.model ? 'border-red-500' : ''}`}
              >
                <option value="">Select Model</option>
                {formData.make && vehicleModels[formData.make]?.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
              {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Price (LKR)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.price ? 'border-red-500' : ''}`}
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>
          </div>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Condition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Manufacture Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.year ? 'border-red-500' : ''}`}
              >
                <option value="">Select Year</option>
                {Array.from({ length: 30 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
              {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Mileage (km)</label>
              <input
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.mileage ? 'border-red-500' : ''}`}
              />
              {errors.mileage && <p className="text-red-500 text-sm mt-1">{errors.mileage}</p>}
            </div>
          </div>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upload images</h2>
          <div className={`border-2 border-dashed rounded-lg p-6 ${errors.images ? 'border-red-500' : 'border-gray-300'}`}>
            <div className="text-center">
              <input
                type="file"
                id="vehicle-images"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                disabled={formData.images.length >= 5}
              />
              <label
                htmlFor="vehicle-images"
                className={`inline-block px-4 py-2 rounded cursor-pointer ${formData.images.length >= 5 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-100 hover:bg-blue-200'}`}
              >
                {formData.images.length >= 5 ? 'Maximum 5 images reached' : 'Upload images Here'}
              </label>
              <p className="text-sm text-gray-500 mt-2">Maximum 5 images (JPEG, PNG)</p>
              {errors.images && <p className="text-red-500 text-sm mt-1">{errors.images}</p>}
            </div>

            
            {formData.images.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {formData.images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Vehicle ${index + 1}`}
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Vehicle'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicleForm;