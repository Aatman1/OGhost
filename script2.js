const countries = [
  { code: 'IN', label: 'India' },
  { code: 'US', label: 'United States' },
  { code: 'GB', label: 'United Kingdom' },
  { code: 'ZM', label: 'Zambia' },
  { code: 'ZW', label: 'Zimbabwe' },
];

document.addEventListener('DOMContentLoaded', () => {
  const countrySelectContainer = document.getElementById('countrySelectContainer');
  const select = countrySelectContainer.querySelector('#countrySelect');
  const selectItems = countrySelectContainer.querySelector('.select-items');
  const selectedCountry = document.getElementById('selectedCountry');

  countries.forEach((country, index) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = `${country.label} (${country.code})`;
      select.appendChild(option);
  });

  select.addEventListener('click', function(e) {
      e.stopPropagation();
      selectItems.classList.toggle('select-hide');
      selectItems.innerHTML = '';

      countries.forEach((country) => {
          const optionDiv = document.createElement('div');
          optionDiv.classList.add('option-box');
          optionDiv.innerHTML = `
              <img
                  loading="lazy"
                  width="30"
                  src="https://flagcdn.com/w20/${country.code.toLowerCase()}.png"
                  srcset="https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x"
                  alt="${country.label} flag"
              />
              &nbsp;&nbsp;${country.label}
          `;
          optionDiv.addEventListener('click', function() {
              select.value = country.code;
              selectedCountry.value = country.code;
              select.dispatchEvent(new Event('change'));
              selectItems.classList.add('select-hide');
          });
          selectItems.appendChild(optionDiv);
      });
  });

  select.addEventListener('change', function() {
      selectedCountry.value = select.value;
  });

  document.addEventListener('click', function(e) {
      if (!countrySelectContainer.contains(e.target)) {
          selectItems.classList.add('select-hide');
      }
  });
});