const countries = [
  { code: '+91', label: 'India', initials: 'IN' },
  { code: '+504', label: 'Honduras', initials: 'HN' },
  { code: '+852', label: 'Hong Kong', initials: 'HK' },
  { code: '+36', label: 'Hungary', initials: 'HU' },
  { code: '+354', label: 'Iceland', initials: 'IS' },
];

function getFlagUrl(countryCode) {
  const country = countries.find(c => c.code === countryCode);
  return {
    20: `https://flagcdn.com/h20/${country.initials.toLowerCase()}.png`,
    40: `https://flagcdn.com/h40/${country.initials.toLowerCase()}.png`,
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const countrySelectContainer = document.getElementById('countrySelectContainer');
  const select = countrySelectContainer.querySelector('#countrySelect');
  const selectItems = countrySelectContainer.querySelector('.select-items');
  const selectedCountry = document.getElementById('selectedCountry');
  const dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdown-menu');

  countries.forEach((country, index) => {
    const dropdownItem = document.createElement('div');
    dropdownItem.classList.add('dropdown-item');
    const flagUrls = getFlagUrl(country.code);
    const flagImg = document.createElement('img');
    flagImg.loading = "lazy";
    flagImg.width = 30;
    flagImg.srcset = `${flagUrls[40]} 2x, ${flagUrls[20]}`;
    flagImg.src = flagUrls[20];
    flagImg.alt = "";
    dropdownItem.appendChild(flagImg);
    dropdownItem.appendChild(document.createTextNode(` ${country.label} (${country.code})`));
    dropdownItem.addEventListener('click', function() {
      select.innerHTML = `<img loading="lazy" width="30" srcset="${flagUrls[40]} 2x, ${flagUrls[20]}" src="${flagUrls[20]}" alt="" /> ${country.label} (${country.code})`;
      selectedCountry.value = country.code;
      selectItems.classList.add('select-hide');
    });
    dropdownMenu.appendChild(dropdownItem);
  });

  select.addEventListener('click', function(e) {
    e.stopPropagation();
    selectItems.classList.toggle('select-hide');
    selectItems.innerHTML = '';
    selectItems.appendChild(dropdownMenu);
  });

  document.addEventListener('click', function(e) {
    if (!countrySelectContainer.contains(e.target)) {
      selectItems.classList.add('select-hide');
    }
  });
});