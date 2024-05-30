const countryList = [
    { code: "+992", name: "Tajikistan" },
    { code: "+255", name: "Tanzania" },
    { code: "+66", name: "Thailand" },
    { code: "+228", name: "Togo" },
    { code: "+690", name: "Tokelau" },
    { code: "+676", name: "Tonga" }
  ];
  
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