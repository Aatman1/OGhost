document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const requestOtpButton = document.getElementById('requestOtpButton');
  const verifyButton = document.getElementById('verify');
  const additionalFields = document.getElementById('additionalFields');
  const result = document.getElementById('result');

  requestOtpButton.addEventListener('click', requestOtp);
  verifyButton.addEventListener('click', verifyOtp);
  emailInput.addEventListener('input', handleEmailInput);

  function requestOtp() {
      const email = emailInput.value.trim();
      if (isValidEmail(email)) {
          if (!additionalFields.classList.contains('hidden')) {
              const otpSection = document.getElementById('otpSection');
              if (otpSection) {
                  otpSection.classList.remove('hidden');
              } 
              requestOtpButton.classList.add('hidden');
          }
      }
  }

  function verifyOtp(event) {
      event.preventDefault();
      const otp = document.getElementById('otp').value.trim();
      if (otp === '' || !additionalFields.classList.contains('hidden')) {
          alert('Please enter the OTP.');
          return;
      }
      // Logic to verify OTP goes here
  }

  function handleEmailInput() {
      const additionalFields = document.getElementById('additionalFields');
      if (additionalFields) {
          additionalFields.classList.add('hidden');
      }
      requestOtpButton.classList.remove('hidden');
      const otpSection = document.getElementById('otpSection');
      if (otpSection) {
          otpSection.classList.add('hidden');
      }
  }

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
