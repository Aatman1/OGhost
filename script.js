

const countryCodeSelect = document.getElementById('country-code');

function populateCountryCodeSelect() {
  countryList.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = `${country.name} ${country.code}`;
    countryCodeSelect.add(option);
  });
}

populateCountryCodeSelect();