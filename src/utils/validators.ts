export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
}

export function validatePassword(password: string, minLength = 6): ValidationResult {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < minLength) {
    return { isValid: false, error: `Password must be at least ${minLength} characters` };
  }
  
  return { isValid: true };
}

export function validateRequired(value: string | number | undefined | null, fieldName = 'Field'): ValidationResult {
  if (value === undefined || value === null || value === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true };
}

export function validateMinLength(value: string, minLength: number, fieldName = 'Field'): ValidationResult {
  if (value.length < minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${minLength} characters` };
  }
  
  return { isValid: true };
}

export function validateMaxLength(value: string, maxLength: number, fieldName = 'Field'): ValidationResult {
  if (value.length > maxLength) {
    return { isValid: false, error: `${fieldName} must be no more than ${maxLength} characters` };
  }
  
  return { isValid: true };
}

export function combineValidators(
  value: string,
  validators: Array<(value: string) => ValidationResult>
): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  
  return { isValid: true };
}
