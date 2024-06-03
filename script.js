document.addEventListener('DOMContentLoaded', function () {
    // DOM Element References
    const signInForm = document.getElementById('signInForm');
    const emailInput = document.getElementById('email');
    const checkEmailButton = document.getElementById('checkEmailButton');
    const additionalFields = document.getElementById('additionalFields');
    const backButton = document.getElementById('backButton');
    const bottomHalf = document.getElementById('bottomHalf');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    const createAccountForm = document.getElementById('createAccountForm');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const inputFields = document.querySelectorAll('.input-group input');
    const passwordAuthStatement = document.getElementById('passwordAuthStatement');
    const requirements = {
        'length': document.getElementById('length'),
        'lowercase': document.getElementById('lowercase'),
        'uppercase': document.getElementById('uppercase'),
        'special': document.getElementById('special')
    };

    const resetPasswordButton = document.getElementById('resetPasswordButton');
    const otpSection = document.getElementById('otpSection');
    const emailSection = document.getElementById('emailSection')
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const verifyButton = document.getElementById('verify');

    resetPasswordButton.addEventListener('click', requestOtp);
    verifyButton.addEventListener('click', verifyOtp);
    emailInput.addEventListener('input', handleEmailInput);
    checkEmailButton.addEventListener('click', checkEmailValidity);
    backButton.addEventListener('click', handleBackButtonClick);
    passwordToggle.addEventListener('click', togglePasswordVisibility);
    emailInput.addEventListener('keypress', handleEmailKeyPress);
    inputFields.forEach(inputField => {
        inputField.addEventListener('input', handleInputFieldChange);
    });
    phoneNumberInput.addEventListener('input', handlePhoneNumberInput);
    createAccountForm.addEventListener('submit', handleFormSubmission);
    resetPasswordButton.addEventListener('click', requestOtp);
    resetPasswordForm.addEventListener('submit', verifyOtp);

    // Functions
    function checkEmailValidity() {
        const email = emailInput.value.trim();
        if (isValidEmail(email)) {
            additionalFields.classList.remove('hidden');
            bottomHalf.classList.add('hidden');
            resetPasswordButton.classList.add('hidden');
            otpSection.classList.remove('hidden');

            validateUsernameLength();
        } else {
            additionalFields.classList.add('hidden');
            bottomHalf.classList.remove('hidden');
        }
    }

    function togglePasswordVisibility() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    }

    function handleEmailKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (additionalFields.classList.contains('hidden')) {
                checkEmailButton.click();
            } else if (bottomHalf.classList.contains('hidden')) {
                CreateAcc.click(); // Assuming CreateAcc is defined elsewhere
            }
        }
    }

    function handleInputFieldChange() {
        const placeholder = this.nextElementSibling;
        placeholder.classList.toggle('floating', this.value.trim() !== '');
    }

    function handlePhoneNumberInput() {
        phoneNumberInput.value = phoneNumberInput.value.replace(/\D/g, '');
    }

    function validateUsernameLength() {
        const username = emailInput.value.trim();
        const isValid = username.length >= 3;
        const usernameError = document.getElementById('usernameError');
        if (isValid) {
            usernameError.textContent = '';
        } else {
            usernameError.textContent = 'Username must be at least 3 characters long.';
        }
    }

    function validatePassword() {
        passwordAuthStatement.classList.remove('hidden');
        const password = passwordInput.value;
        const validations = {
            'length': password.length >= 8 && password.length <= 16,
            'lowercase': /[a-z]/.test(password),
            'uppercase': /[A-Z]/.test(password),
            'special': /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        for (const [key, element] of Object.entries(requirements)) {
            const isValid = validations[key];
            const img = element.querySelector('img');
            img.src = isValid ? 'check.png' : 'close.png';
            element.classList.toggle('valid', isValid);
        }

        if (Object.values(validations).every(Boolean)) {
            passwordInput.classList.remove('invalid');
        } else {
            passwordInput.classList.add('invalid');
        }

        if (!additionalFields.classList.contains('hidden')) {
            validateUsernameLength();
        }
    }

    function handleFormSubmission(event) {
        event.preventDefault();
        const passwordValue = passwordInput.value;
        const validations = {
            'length': passwordValue.length >= 8 && passwordValue.length <= 16,
            'lowercase': /[a-z]/.test(passwordValue),
            'uppercase': /[A-Z]/.test(passwordValue),
            'special': /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)
        };
        const requiredFields = document.querySelectorAll('input[required]');
        let isEmpty = false;

        requiredFields.forEach(field => {
            if (field.value.trim() === '') {
                field.classList.add('invalid');
                isEmpty = true;
            } else {
                field.classList.remove('invalid');
            }
        });

        if (Object.values(validations).every(Boolean) && !isEmpty) {
            console.log('Form is valid and ready to be submitted');
            document.getElementById('verification-container').classList.remove('hidden');
            createAccountForm.classList.add('hidden');
        } else {
            console.log('Form is invalid');
        }
    }

    function handleBackButtonClick(event) {
        event.preventDefault();
        additionalFields.classList.add('hidden');
        bottomHalf.classList.remove('hidden');
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function requestOtp() {
        const email = emailInput.value.trim();
        // Code to send OTP request to the server
        // ...

        additionalFields.classList.remove('hidden');
        otpSection.classList.remove('hidden');
    }
    
    function requestOtp() {
        // Your logic for requesting OTP goes here
        // For now, let's just show the additional fields and OTP section
        if (additionalFields && otpSection) {
            additionalFields.classList.remove('hidden');
            otpSection.classList.remove('hidden');
        } else {
            console.error('One or more elements not found');
        }
    }

    function verifyOtp(event) {
        event.preventDefault();
        // Your logic for verifying OTP goes here
    }

    function handleEmailInput() {
        // Hide additional fields and OTP section when email changes
        if (additionalFields && otpSection) {
            additionalFields.classList.add('hidden');
            otpSection.classList.add('hidden');
        } else {
            console.error('One or more elements not found');
        }
    }
});
