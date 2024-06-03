
document.addEventListener('DOMContentLoaded', function () {
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

    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });
    
    emailYes.addEventListener('click', checkEmailValidity);

    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function checkEmailValidity() {
        const email = emailInput.value.trim();
        if (isValidEmail(email)) {
            additionalFields.classList.remove('hidden');
            //backButton.classList.remove('hidden');
            bottomHalf.classList.add('hidden');
        } else {
            additionalFields.classList.add('hidden');
            bottomHalf.classList.remove('hidden');
        }
    }

    // Add event listener to the button
    emailYes.addEventListener('click', checkEmailValidity);
    CreateAcc.addEventListener('click', checkEmailValidity);

    // Listen for Enter key press on the email input
    emailInput.addEventListener('keypress', function(event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            if(additionalFields === 'hidden'){
            // Prevent the default form submission behavior
            event.preventDefault();
            // Trigger the button click
            emailYes.click();
            }
            else if(bottomHalf === 'hidden'){
            event.preventDefault();
            CreateAcc.click();
            }
        }
    });
    

    inputFields.forEach(inputField => {
        inputField.addEventListener('input', () => {
            const placeholder = inputField.nextElementSibling;
            placeholder.classList.toggle('floating', inputField.value.trim() !== '');
        });
    });

    phoneNumberInput.addEventListener('input', () => {
        phoneNumberInput.value = phoneNumberInput.value.replace(/\D/g, '');
    });

    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });

    passwordInput.addEventListener('input', () => {
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
    });

    createAccountForm.addEventListener('submit', (event) => {
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
            // Proceed with form submission (e.g., send data to server)
            console.log('Form is valid and ready to be submitted');
            // Example of showing the verification container
            document.getElementById('verification-container').classList.remove('hidden');
            createAccountForm.classList.add('hidden');
        } else {
            console.log('Form is invalid');
        }
    });

    // Add event listener for backButton
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        additionalFields.classList.add('hidden');
        bottomHalf.classList.remove('hidden');
    });
});
