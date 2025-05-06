function validatePassword (newPassword, confirmPassword) {
  const errors = {};

  if (!newPassword) {
    errors.newPassword = 'New password is required';
  } else if (newPassword.length < 8) {
    errors.newPassword = 'New password must be at least 8 characters long';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (confirmPassword !== newPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
}

export default validatePassword;