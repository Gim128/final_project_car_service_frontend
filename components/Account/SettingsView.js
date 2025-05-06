import React, { useState } from 'react';
import { changePassword, logout } from '../../services/authService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import validatePassword from '@/utils/validators';
// import { validatePassword } from '../../utils/validators';


const SettingsView = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change
    if (name === 'newPassword' || name === 'confirmPassword') {
      const validation = validatePasswordatePassword(
        name === 'newPassword' ? value : passwordData.newPassword,
        name === 'confirmPassword' ? value : passwordData.confirmPassword
      );
      setErrors(validation);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validatePassword(passwordData.newPassword, passwordData.confirmPassword);
    setErrors(validation);
    
    if (Object.keys(validation).length === 0) {
      try {
        await changePassword(passwordData);
        toast.success('Password changed successfully');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } catch (error) {
        toast.error(error.message || 'Failed to change password');
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    toast.info('Logged out successfully');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <h3 className="text-lg font-medium">Change Password</h3>
        
        <InputField
          type="password"
          label="Current Password"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handleChange}
          required
        />
        
        <InputField
          type="password"
          label="New Password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handleChange}
          error={errors.newPassword}
          required
        />
        
        <InputField
          type="password"
          label="Confirm New Password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          required
        />
        
        <Button 
          type="submit"
          disabled={!passwordData.currentPassword || 
                   !passwordData.newPassword || 
                   !passwordData.confirmPassword ||
                   Object.keys(errors).length > 0}
        >
          Change Password
        </Button>
      </form>
      
      <div className="space-y-4">
        <Button variant="danger" onClick={handleLogout}>Log Out</Button>
      </div>
    </div>
  );
};

export default SettingsView;