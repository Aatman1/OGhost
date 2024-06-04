$(".dropdown img.flag").addClass("flagvisibility");

$(".dropdown dt a").click(function() {
    $(".dropdown dd ul").toggle();
});
            
$(".dropdown dd ul li a").click(function() {
    var text = $(this).html();
    $(".dropdown dt a span").html(text);
    $(".dropdown dd ul").hide();
    $("#result").html("Selected value is: " + getSelectedValue("sample"));
});
            
function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown"))
        $(".dropdown dd ul").hide();
});



    $(".dropdown img.flag").toggleClass("flagvisibility");
  countries.forEach((country, index) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = country.label;
      select.appendChild(option);

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

  select.addEventListener('change', function() {
      selectedCountry.value = select.value;
  });

  select.addEventListener('click', function(e) {
      e.stopPropagation();
      selectItems.classList.toggle('select-hide');
  });

