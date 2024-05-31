const passwordInput = document.getElementById('password');
const passwordToggle = document.querySelector('.password-toggle');
const createAccountForm = document.getElementById('createAccountForm');
const verificationContainer = document.getElementById('verification-container');
const passwordAuthStatement = document.getElementById('passwordAuthStatement');
const requirementImages = {
    'length': document.querySelector('#length img'),
    'lowercase': document.querySelector('#lowercase img'),
    'uppercase': document.querySelector('#uppercase img'),
    'special': document.querySelector('#special img')
};
const inputTypes = ['text', 'password', 'email', 'tel'];
const phoneNumberInput = document.getElementById('phoneNumber');
const inputFields = document.querySelectorAll('.input-group input');

inputTypes.forEach(inputType => {
    const inputField = document.querySelector(`input[type="${inputType}"]`);
    if (inputField) {
        inputField.addEventListener('input', () => {
            const placeholder = inputField.nextElementSibling;
            if (inputField.value.trim() || inputField === document.activeElement) {
                placeholder.classList.add('floating');
            } else {
                placeholder.classList.remove('floating');
            }
        });
    }
});
phoneNumberInput.addEventListener('input', () => {
    phoneNumberInput.value = phoneNumberInput.value.replace(/\D/g, ''); // Replace any non-numeric character with an empty string
});

inputFields.forEach(inputField => {
    const placeholder = inputField.nextElementSibling;
    inputField.addEventListener('input', () => {
        if (inputField.value.trim() || inputField === document.activeElement) {
            placeholder.classList.add('floating');
        } else {
            placeholder.classList.remove('floating');
        }
    });

    inputField.addEventListener('blur', () => {
        if (!inputField.value.trim()) {
            placeholder.classList.remove('floating');
        }
    });
});

passwordToggle.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});

passwordInput.addEventListener('input', () => {
    passwordAuthStatement.classList.remove('hidden');
    const password = passwordInput.value;
    const requirements = {
        'length': password.length >= 8 && password.length <= 16,
        'lowercase': /[a-z]/.test(password),
        'uppercase': /[A-Z]/.test(password),
        'special': /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    for (const key in requirements) {
        const isValid = requirements[key];
        const element = document.getElementById(key);
        const image = requirementImages[key];
        image.src = isValid ? 'checkmark.png' : 'cross.png';
        element.style.color = isValid ? 'green' : 'red';
        element.classList.toggle('valid', isValid);
    }
});

createAccountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const passwordValue = passwordInput.value;
    const requirements = {
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
    
    if (Object.values(requirements).every(Boolean) && !isEmpty) {
        console.log('Account created successfully!');
        verificationContainer.classList.remove('hidden');
        document.querySelector('.container').classList.add('hidden');
    } else {
        alert('Please ensure the password meets all the requirements and all required fields are filled in.');
    }
});
