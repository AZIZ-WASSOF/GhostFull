document.addEventListener('DOMContentLoaded', () => {
    // Switch to Signup Form
    document.getElementById('showSignup').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('loginContainer').classList.add('hidden');
      document.getElementById('signupContainer').classList.remove('hidden');
    });
  
    // Switch to Login Form
    document.getElementById('showLogin').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('signupContainer').classList.add('hidden');
      document.getElementById('loginContainer').classList.remove('hidden');
    });
  });

  let validationState = {
    length: false,
    uppercase: false,
    specialChar: false,
    number: false
};

function validatePassword(password) {
    // التحقق من الشروط
    const lengthValid = password.length >= 8 && password.length <= 12;
    const uppercaseValid = /[A-Z]/.test(password);
    const specialCharValid = /[!@#$%^&*]/.test(password);
    const numberValid = /\d/.test(password);

    // تحديث الحالة
    validationState = {
        length: lengthValid,
        uppercase: uppercaseValid,
        specialChar: specialCharValid,
        number: numberValid
    };

    // تحديث الواجهة
    updateValidationIcons();
    toggleConfirmPasswordField();
}

function updateValidationIcons() {
    document.getElementById('lengthCheck').textContent = validationState.length ? '✅' : '❌';
    document.getElementById('uppercaseCheck').textContent = validationState.uppercase ? '✅' : '❌';
    document.getElementById('specialCharCheck').textContent = validationState.specialChar ? '✅' : '❌';
    document.getElementById('numberCheck').textContent = validationState.number ? '✅' : '❌';
}

function toggleConfirmPasswordField() {
    const allValid = Object.values(validationState).every(v => v);
    document.getElementById('confirmPassword').disabled = !allValid;
}

function checkPasswordsMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const match = password === confirmPassword;
    
    if(confirmPassword.length > 0) {
        document.getElementById('confirmPassword').classList.toggle('border-green-500', match);
        document.getElementById('confirmPassword').classList.toggle('border-red-500', !match);
    }
    
    // تعطيل زر التسجيل إذا لم تتطابق
    document.querySelector('#signupContainer button').disabled = !match;
}  