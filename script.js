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
    const emailSection = document.getElementById('emailSection');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const verifyButton = document.getElementById('verify');

    // Debug logs
    console.log('emailSection:', emailSection);
    console.log('otpSection:', otpSection);

    // Event Listeners
    emailInput.addEventListener('keypress', handleEmailKeyPress);
    checkEmailButton.addEventListener('click', checkEmailValidity);
    backButton.addEventListener('click', handleBackButtonClick);
    passwordToggle.addEventListener('click', togglePasswordVisibility);
    inputFields.forEach(inputField => {
        inputField.addEventListener('input', handleInputFieldChange);
    });
    resetPasswordButton.addEventListener('click', handleResetPasswordClick);
    resetPasswordForm.addEventListener('submit', handleOTPSubmit);
    phoneNumberInput.addEventListener('input', handlePhoneNumberInput);
    createAccountForm.addEventListener('submit', handleFormSubmission);
    resetPasswordButton.addEventListener('click', requestOtp);

    // Function Definitions
    function handleResetPasswordClick() {
        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            console.log('Email submitted:', email);
            emailSection.classList.add('hidden');
            otpSection.classList.remove('hidden');
        } else {
            alert('Please enter a valid email address.');
        }
    }

    function handleOTPSubmit(event) {
        event.preventDefault();
        const otp = document.getElementById('otp').value.trim();
        console.log('OTP submitted:', otp);
    }

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return pattern.test(email);
    }

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
                createAccountForm.submit();
            }   
            else if(otpSection.classList.contains('hidden')) {
                resetPasswordButton.click();
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

        passwordInput.classList.toggle('invalid', !Object.values(validations).every(Boolean));

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

    function requestOtp() {
        const email = emailInput.value.trim();
        // Code to send OTP request to the server
        additionalFields.classList.remove('hidden');
        otpSection.classList.remove('hidden');
    }
});
