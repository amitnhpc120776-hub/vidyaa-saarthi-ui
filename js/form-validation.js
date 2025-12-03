// Form validation using Bootstrap validation classes
class VSFormValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.setupValidation();
  }

  setupValidation() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      if (!this.form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.form.classList.add('was-validated');
    }, false);
  }

  validateField(fieldSelector) {
    const field = this.form.querySelector(fieldSelector);
    if (!field) return false;
    return field.checkValidity();
  }

  resetForm() {
    this.form.classList.remove('was-validated');
    this.form.reset();
  }

  // Email validation
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Password validation (min 8 chars, 1 uppercase, 1 number)
  validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }

  // Phone validation
  validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  }
}

// Example usage:
// const validator = new VSFormValidator('#signupForm');
