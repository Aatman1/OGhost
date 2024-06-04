<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css" />
  <title>Create Account</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    .desc {\n        color: #6b6b6b;\n      }\n    \n      .desc a {\n        color: #0092dd;\n      }\n    \n      .dropdown dd,\n      .dropdown dt,\n      .dropdown ul {\n        margin: 0px;\n        padding: 0px;\n      }\n    \n      .dropdown dd {\n        position: relative;\n      }\n    \n      .dropdown a,\n      .dropdown a:visited {\n        color: #816c5b;\n        text-decoration: none;\n        outline: none;\n      }\n    \n      .dropdown a:hover {\n        color: #5d4617;\n      }\n    \n      .dropdown dt a:hover {\n        color: #5d4617;\n        border: 1px solid #d0c9af;\n      }\n    \n      .dropdown dt a {\n        background: #e4dfcb url(\'http://www.jankoatwarpspeed.com/wp-content/uploads/examples/reinventing-drop-down/arrow.png\') no-repeat scroll right center;\n        display: block;\n        padding-right: 20px;\n        border: 1px solid #d4ca9a;\n        width: 150px;\n      }\n    \n      .dropdown dt a span {\n        cursor: pointer;\n        display: block;\n        padding: 5px;\n      }\n    \n      .dropdown dd ul {\n        background: #e4dfcb none repeat scroll 0 0;\n        border: 1px solid #d4ca9a;\n        color: #C5C0B0;\n        display: none;\n        left: 0px;\n        padding: 5px 0px;\n        position: absolute;\n        top: 2px;\n        width: auto;\n        min-width: 170px;\n        list-style: none;\n      }\n    \n      .dropdown span.value {\n        display: none;\n      }\n    \n      .dropdown dd ul li a {\n        padding: 5px;\n        display: block;\n      }\n    \n      .dropdown dd ul li a:hover {\n        background-color: #d0c9af;\n      }\n    \n      .dropdown img.flag {\n        border: none;\n        vertical-align: middle;\n        margin-left: 10px;\n      }\n    \n      .flagvisibility {\n        display: none;\n      }\n    \n    body {\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        background-color: white;\n    }\n    .container {\n        width: 350px;    \n        text-align: center;\n        background-color: white;\n        padding: 40px 0;\n    }\n    img[alt="Logo"] {\n        width: 80px;\n        padding: 0;\n    }\n    h2 {\n        font-size: 40px;\n        padding-bottom: 40px;\n        margin: 0;\n    }\n    .input-group{\n        height: 50px;\n        position: relative;\n        margin-bottom: 15px;\n        display: flex;\n        align-items: flex-end;\n    }\n    input[type="text"], \n    input[type="password"], \n    input[type="email"], \n    input[type="tel"] {\n        height: 30px;\n        padding: 10px;\n        border: 1px solid #999;\n        border-radius: 5px;\n        width: 100%;\n        font-size: 16px;\n        transition: all 0.1s;\n    }\n    input[type="text"]:focus, \n    input[type="password"]:focus, \n    input[type="email"]:focus, \n    input[type="tel"]:focus {\n        outline: none;\n        background-color: white;\n        border-color: #563bff;\n    }\n    input[type="password"].invalid, \n    input[type="text"].invalid {\n        border-color: red;\n    }\n    .placeholder {\n        font-size: 16px;\n        position: absolute;\n        left: 10px;\n        top: 13px;\n        color: #999;\n        pointer-events: none;\n        transition: 0.3s;\n    }\n    .placeholder.floating {\n        top: -10px;\n        left: 5px;\n        color: #563bff;\n        font-size: 12px;\n        padding: 0 5px;\n    }\n    \n    input[type="text"]:focus ~ .placeholder,\n    input[type="text"]:not(:placeholder-shown) ~ .placeholder,\n    input[type="password"]:focus ~ .placeholder,\n    input[type="password"]:not(:placeholder-shown) ~ .placeholder,\n    input[type="email"]:focus ~ .placeholder,\n    input[type="email"]:not(:placeholder-shown) ~ .placeholder{\n        top: -10px;\n        left: 5px;\n        font-size: 12px;  \n        color: #563bff;\n        background-color: white;\n        padding: 0 5px;\n    }\n    \n    input[type="email"]:focus ~ .placeholder,\n    input[type="password"]:focus ~ .placeholder,\n    input[type="text"]:focus ~ .placeholder{\n        font-size: 12px;\n    }\n    input[type="tel"]:focus ~ .placeholder{\n        top: -10px;\n        left: 5px;\n        font-size: 12px;\n        color: #563bff;\n        background-color: white;\n        padding: 0 5px;\n    }\n    input[type="tel"]:not(:placeholder-shown) ~ .placeholder{\n        left: 5px;\n        padding: 0 5px;\n        background-color: white;\n    }\n    textarea{\n        left: 15px;\n    }\n    .password-group {\n        position: relative;\n    }\n    .password-toggle {\n        position: absolute;\n        top: 16px;\n        right: 17px;\n        transform: translateY(-50%);\n        background: none;\n        border: none;\n        cursor: pointer;\n        width: 20px;\n        height: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .password-toggle img {\n        height: 23px;\n        align-self: flex-end;\n        opacity: 65%;\n        transition: 0.2s;\n    } \n    .password-toggle img:hover{\n        content: url(\'view.png\');\n        color: #563bff;\n        opacity: 100%;\n        transition: 0.2s;\n    }\n    button {\n        padding: 10px;\n        background-color: #336cff;\n        color: white;\n        border-color: transparent;\n        border-radius: 4px;\n        cursor: pointer;\n        font-size: 16px;\n        width: 100%;\n        height: 50px;\n        transition: 0.3s;\n        margin: 20px 0 10px;\n    }\n    button:hover {\n        background-color: #0010c3;\n    }\n    .alternate-options button {\n        height: 52px;\n        display: flex;\n        align-items: center;\n        width: 100%;\n        margin-bottom: 10px;\n        background-color: #fff;\n        color: #333;\n        border: 1px solid #999;\n        transition: 0.3s;\n        text-align: left; /* Align text to the left */\n    }\n    .alternate-options button:hover {\n        border-color: #bbb;\n        background-color: #ccc;\n        transition: 0.3s;\n    }\n    .alternate-options button img {\n        width: 20px;\n        padding: 0 5px 0 5px;\n    }\n    \n    .alternate-options button .icon-text-container {\n        display: flex;\n        align-items: center;\n    }\n    \n    .alternate-options button span {\n        margin-left: 10px; /* Add spacing between image and text */\n    }\n    \n    p {\n        font-size: 12px;\n        width: 360px;\n    }\n    a {\n        color: #563bff;\n        text-decoration: none;\n    }\n    h3 {\n        width: 100%; \n        text-align: center; \n        border-bottom: 1px solid #1538ff6e; \n        line-height: 0.1em;\n        margin: 30px 0 30px; \n    } \n    h3 span { \n        color: #1538ff6e;\n        background: white; \n        padding: 0 10px; \n    }\n    footer {\n        margin-top: 20px;\n        font-size: 12px;\n        color: #666;\n    }\n    .backButton, .backButton:hover {\n        background-color: transparent; \n        margin: 0;\n    }\n    .backButton img{\n        height: 50px;\n    }\n    .phone-input-group {\n        display: flex;\n        align-items: center;\n        gap: 2px;\n        justify-content: center;\n        width: fit-content;\n        margin: 0 auto;\n    }\n    .phone-input input[type="tel"] {\n        width: 246px;\n    }\n    select {\n        padding: 10px;\n        border: 1px solid #999;\n        border-radius: 5px;\n        font-size: 16px;\n        transition: 0.3s;\n        height: 52px;\n        width: 80px;\n        margin-bottom: 17px;\n    }\n    select:focus {\n        outline: none;\n        border-color: #563bff;\n    }\n    .hidden {\n        display: none;\n    }\n    #passwordAuthStatement img {\n        height: 8px; /* Adjust the height of the images as needed */\n        vertical-align: middle; /* Align images vertically */\n        margin-right: 5px; /* Add spacing between the image and the text */\n        transition: 0.2s;\n    }\n    .passAuth {\n        color: #575757;\n        border-color: #999;\n    }\n    .error {\n        border: 1px solid #ccc;\n        padding: 10px; /* Optional: Add some padding */\n        border-radius: 4px; /* Optional: Add rounded corners */\n        font-size: 14px;\n        text-align: left;\n        list-style-type: " ";\n        margin-bottom: 20px;\n        margin-top: 0px;\n        padding-left: 10px;\n        transition: 0.2s;\n    }\n    .valid {\n        list-style-type: "  "; /* Change bullet list symbol */\n        transition: 0.2s;\n    }\n    .hidden {\n        transition: opacity 0.3s ease-out, max-height 0.3s ease-out;\n    }\n    \n    .visible {\n        transition: opacity 0.3s ease-in, max-height 0.3s ease-in;\n    }\n'
    }}
  />
  <div className="container">
    <img src="OG_logo.svg" alt="Logo" style={{ width: 100 }} />
    <h2>Create Your Account</h2>
    <form id="createAccountForm" onsubmit="return validateForm()">
      <div className="input-group">
        <input
          type="email"
          id="email"
          placeholder=" "
          required=""
          aria-label="Email"
        />
        <span className="placeholder">Email</span>
      </div>
      <div id="additionalFields" className="hidden">
        <div className="input-group">
          <input
            type="text"
            id="userName"
            placeholder=" "
            required=""
            aria-label="User Name"
          />
          <span className="placeholder">Username</span>
        </div>
        <div className="phone-input-group">
          <select id="countryCode" required="">
            <option value={+91} data-full-name="India">
              IN
            </option>
            <option value={+1} data-full-name="United States">
              US
            </option>
            <option value={+44} data-full-name="United Kingdom">
              UK
            </option>
            <option value={+61} data-full-name="Australia">
              AU
            </option>
            <option value={+81} data-full-name="Japan">
              JP
            </option>
            <option value={+49} data-full-name="Germany">
              DE
            </option>
            <option value={+33} data-full-name="France">
              FR
            </option>
            <option value={+39} data-full-name="Italy">
              IT
            </option>
            <option value={+86} data-full-name="China">
              CN
            </option>
            <option value={+7} data-full-name="Russia">
              RU
            </option>
            <option value={+55} data-full-name="Brazil">
              BR
            </option>
            <option value={+27} data-full-name="South Africa">
              ZA
            </option>
            <option value={+34} data-full-name="Spain">
              ES
            </option>
            <option value={+82} data-full-name="South Korea">
              KR
            </option>
            <option value={+46} data-full-name="Sweden">
              SE
            </option>
            <option value={+31} data-full-name="Netherlands">
              NL
            </option>
            <option value={+34} data-full-name="Spain">
              ES
            </option>
            <option value={+47} data-full-name="Norway">
              NO
            </option>
            <option value={+45} data-full-name="Denmark">
              DK
            </option>
            <option value={+48} data-full-name="Poland">
              PL
            </option>
            <option value={+52} data-full-name="Mexico">
              MX
            </option>
            <option value={+41} data-full-name="Switzerland">
              CH
            </option>
            <option value={+351} data-full-name="Portugal">
              PT
            </option>
            <option value={+66} data-full-name="Thailand">
              TH
            </option>
            <option value={+90} data-full-name="Turkey">
              TR
            </option>
            <option value={+60} data-full-name="Malaysia">
              MY
            </option>
            <option value={+65} data-full-name="Singapore">
              SG
            </option>
            <option value={+62} data-full-name="Indonesia">
              ID
            </option>
            <option value={+63} data-full-name="Philippines">
              PH
            </option>
            <option value={+92} data-full-name="Pakistan">
              PK
            </option>
            <option value={+964} data-full-name="Iraq">
              IQ
            </option>
            <option value={+98} data-full-name="Iran">
              IR
            </option>
            <option value={+213} data-full-name="Algeria">
              DZ
            </option>
            <option value={+54} data-full-name="Argentina">
              AR
            </option>
            <option value={+61} data-full-name="Australia">
              AU
            </option>
            <option value={+43} data-full-name="Austria">
              AT
            </option>
            <option value={+973} data-full-name="Bahrain">
              BH
            </option>
            <option value={+880} data-full-name="Bangladesh">
              BD
            </option>
            <option value={+32} data-full-name="Belgium">
              BE
            </option>
            <option value={+591} data-full-name="Bolivia">
              BO
            </option>
            <option value={+267} data-full-name="Botswana">
              BW
            </option>
            <option value={+359} data-full-name="Bulgaria">
              BG
            </option>
            <option value={+855} data-full-name="Cambodia">
              KH
            </option>
            <option value={+237} data-full-name="Cameroon">
              CM
            </option>
            <option value={+1} data-full-name="Canada">
              CA
            </option>
            <option value={+56} data-full-name="Chile">
              CL
            </option>
            <option value={+57} data-full-name="Colombia">
              CO
            </option>
            <option value={+506} data-full-name="Costa Rica">
              CR
            </option>
            <option value={+385} data-full-name="Croatia">
              HR
            </option>
            <option value={+53} data-full-name="Cuba">
              CU
            </option>
            <option value={+357} data-full-name="Cyprus">
              CY
            </option>
            <option value={+420} data-full-name="Czech Republic">
              CZ
            </option>
            <option value={+253} data-full-name="Djibouti">
              DJ
            </option>
            <option value={+593} data-full-name="Ecuador">
              EC
            </option>
            <option value={+20} data-full-name="Egypt">
              EG
            </option>
            <option value={+503} data-full-name="El Salvador">
              SV
            </option>
            <option value={+372} data-full-name="Estonia">
              EE
            </option>
            <option value={+251} data-full-name="Ethiopia">
              ET
            </option>
            <option value={+679} data-full-name="Fiji">
              FJ
            </option>
            <option value={+358} data-full-name="Finland">
              FI
            </option>
            <option value={+220} data-full-name="Gambia">
              GM
            </option>
            <option value={+995} data-full-name="Georgia">
              GE
            </option>
            <option value={+233} data-full-name="Ghana">
              GH
            </option>
            <option value={+30} data-full-name="Greece">
              GR
            </option>
            <option value={+502} data-full-name="Guatemala">
              GT
            </option>
            <option value={+224} data-full-name="Guinea">
              GN
            </option>
            <option value={+509} data-full-name="Haiti">
              HT
            </option>
            <option value={+504} data-full-name="Honduras">
              HN
            </option>
            <option value={+36} data-full-name="Hungary">
              HU
            </option>
            <option value={+354} data-full-name="Iceland">
              IS
            </option>
            <option value={+62} data-full-name="Indonesia">
              ID
            </option>
            <option value={+98} data-full-name="Iran">
              IR
            </option>
            <option value={+964} data-full-name="Iraq">
              IQ
            </option>
            <option value={+353} data-full-name="Ireland">
              IE
            </option>
            <option value={+972} data-full-name="Israel">
              IL
            </option>
            <option value={+225} data-full-name="Ivory Coast">
              CI
            </option>
            <option value={+962} data-full-name="Jordan">
              JO
            </option>
            <option value={+7} data-full-name="Kazakhstan">
              KZ
            </option>
            <option value={+254} data-full-name="Kenya">
              KE
            </option>
            <option value={+965} data-full-name="Kuwait">
              KW
            </option>
            <option value={+996} data-full-name="Kyrgyzstan">
              KG
            </option>
            <option value={+856} data-full-name="Laos">
              LA
            </option>
            <option value={+371} data-full-name="Latvia">
              LV
            </option>
            <option value={+961} data-full-name="Lebanon">
              LB
            </option>
            <option value={+231} data-full-name="Liberia">
              LR
            </option>
            <option value={+218} data-full-name="Libya">
              LY
            </option>
            <option value={+423} data-full-name="Liechtenstein">
              LI
            </option>
            <option value={+370} data-full-name="Lithuania">
              LT
            </option>
            <option value={+352} data-full-name="Luxembourg">
              LU
            </option>
            <option value={+853} data-full-name="Macau">
              MO
            </option>
            <option value={+389} data-full-name="Macedonia">
              MK
            </option>
            <option value={+261} data-full-name="Madagascar">
              MG
            </option>
            <option value={+265} data-full-name="Malawi">
              MW
            </option>
            <option value={+60} data-full-name="Malaysia">
              MY
            </option>
            <option value={+960} data-full-name="Maldives">
              MV
            </option>
            <option value={+223} data-full-name="Mali">
              ML
            </option>
            <option value={+356} data-full-name="Malta">
              MT
            </option>
            <option value={+222} data-full-name="Mauritania">
              MR
            </option>
            <option value={+230} data-full-name="Mauritius">
              MU
            </option>
            <option value={+52} data-full-name="Mexico">
              MX
            </option>
            <option value={+373} data-full-name="Moldova">
              MD
            </option>
            <option value={+377} data-full-name="Monaco">
              MC
            </option>
            <option value={+976} data-full-name="Mongolia">
              MN
            </option>
            <option value={+382} data-full-name="Montenegro">
              ME
            </option>
            <option value={+212} data-full-name="Morocco">
              MA
            </option>
            <option value={+258} data-full-name="Mozambique">
              MZ
            </option>
            <option value={+95} data-full-name="Myanmar">
              MM
            </option>
            <option value={+264} data-full-name="Namibia">
              NA
            </option>
            <option value={+977} data-full-name="Nepal">
              NP
            </option>
            <option value={+31} data-full-name="Netherlands">
              NL
            </option>
            <option value={+64} data-full-name="New Zealand">
              NZ
            </option>
            <option value={+505} data-full-name="Nicaragua">
              NI
            </option>
            <option value={+227} data-full-name="Niger">
              NE
            </option>
            <option value={+234} data-full-name="Nigeria">
              NG
            </option>
            <option value={+47} data-full-name="Norway">
              NO
            </option>
            <option value={+968} data-full-name="Oman">
              OM
            </option>
            <option value={+92} data-full-name="Pakistan">
              PK
            </option>
            <option value={+507} data-full-name="Panama">
              PA
            </option>
            <option value={+675} data-full-name="Papua New Guinea">
              PG
            </option>
            <option value={+595} data-full-name="Paraguay">
              PY
            </option>
            <option value={+51} data-full-name="Peru">
              PE
            </option>
            <option value={+63} data-full-name="Philippines">
              PH
            </option>
            <option value={+48} data-full-name="Poland">
              PL
            </option>
            <option value={+351} data-full-name="Portugal">
              PT
            </option>
            <option value={+974} data-full-name="Qatar">
              QA
            </option>
            <option value={+40} data-full-name="Romania">
              RO
            </option>
            <option value={+7} data-full-name="Russia">
              RU
            </option>
            <option value={+250} data-full-name="Rwanda">
              RW
            </option>
            <option value={+966} data-full-name="Saudi Arabia">
              SA
            </option>
            <option value={+221} data-full-name="Senegal">
              SN
            </option>
            <option value={+381} data-full-name="Serbia">
              RS
            </option>
            <option value={+248} data-full-name="Seychelles">
              SC
            </option>
            <option value={+232} data-full-name="Sierra Leone">
              SL
            </option>
            <option value={+65} data-full-name="Singapore">
              SG
            </option>
            <option value={+421} data-full-name="Slovakia">
              SK
            </option>
            <option value={+386} data-full-name="Slovenia">
              SI
            </option>
            <option value={+27} data-full-name="South Africa">
              ZA
            </option>
            <option value={+82} data-full-name="South Korea">
              KR
            </option>
            <option value={+34} data-full-name="Spain">
              ES
            </option>
            <option value={+94} data-full-name="Sri Lanka">
              LK
            </option>
            <option value={+249} data-full-name="Sudan">
              SD
            </option>
            <option value={+597} data-full-name="Suriname">
              SR
            </option>
            <option value={+268} data-full-name="Swaziland">
              SZ
            </option>
            <option value={+46} data-full-name="Sweden">
              SE
            </option>
            <option value={+41} data-full-name="Switzerland">
              CH
            </option>
            <option value={+963} data-full-name="Syria">
              SY
            </option>
            <option value={+886} data-full-name="Taiwan">
              TW
            </option>
            <option value={+992} data-full-name="Tajikistan">
              TJ
            </option>
            <option value={+255} data-full-name="Tanzania">
              TZ
            </option>
            <option value={+66} data-full-name="Thailand">
              TH
            </option>
            <option value={+228} data-full-name="Togo">
              TG
            </option>
            <option value={+676} data-full-name="Tonga">
              TO
            </option>
            <option value={+216} data-full-name="Tunisia">
              TN
            </option>
            <option value={+90} data-full-name="Turkey">
              TR
            </option>
            <option value={+993} data-full-name="Turkmenistan">
              TM
            </option>
            <option value={+256} data-full-name="Uganda">
              UG
            </option>
            <option value={+380} data-full-name="Ukraine">
              UA
            </option>
            <option value={+971} data-full-name="United Arab Emirates">
              AE
            </option>
            <option value={+44} data-full-name="United Kingdom">
              UK
            </option>
            <option value={+598} data-full-name="Uruguay">
              UY
            </option>
            <option value={+998} data-full-name="Uzbekistan">
              UZ
            </option>
            <option value={+678} data-full-name="Vanuatu">
              VU
            </option>
            <option value={+58} data-full-name="Venezuela">
              VE
            </option>
            <option value={+84} data-full-name="Vietnam">
              VN
            </option>
            <option value={+967} data-full-name="Yemen">
              YE
            </option>
            <option value={+260} data-full-name="Zambia">
              ZM
            </option>
            <option value={+263} data-full-name="Zimbabwe">
              ZW
            </option>
          </select>
          <div className="input-group phone-input">
            <input
              type="tel"
              id="phoneNumber"
              maxLength={11}
              required=""
              aria-label="Phone Number"
            />
            <span className="placeholder">Phone Number</span>
          </div>
        </div>
        <div className="input-group password-group">
          <input
            type="password"
            id="password"
            placeholder=" "
            required=""
            aria-label="Password"
          />
          <span className="placeholder">Password</span>
          <button
            type="button"
            className="password-toggle"
            id="passwordToggle"
            style={{ backgroundColor: "transparent" }}
          >
            <img src="hidden.png" alt="Toggle Password Visibility" />
          </button>
        </div>
        <div className="passAuth">
          <ul id="passwordAuthStatement" className="error hidden">
            <li id="length">
              <img src="close.png" alt="Status" /> Must be 8-16 characters long
            </li>
            <li id="lowercase">
              <img src="close.png" alt="Status" /> Must contain at least 1
              lowercase letter
            </li>
            <li id="uppercase">
              <img src="close.png" alt="Status" /> Must contain at least 1
              uppercase letter
            </li>
            <li id="special">
              <img src="close.png" alt="Status" /> Must contain at least 1
              special character
            </li>
          </ul>
        </div>
        <button id="CreateAcc" type="submit">
          Create Account
        </button>
        <p>
          By creating an account, you agree to OfferGhost's
          <a href="https://offerghosting.com/terms-of-use/">Terms of Service</a>
          ,
          <a href="https://offerghosting.com/end-user-license-agreement/">
            Terms of Agreement
          </a>
          , and
          <a href="https://offerghosting.com/privacy-policy/">Privacy Policy</a>
          .
        </p>
        <p>
          Already have an account? <a href="signin.html">Sign in</a>
        </p>
        <button id="backButton" className="backButton">
          <img src="back-button.png" alt="" />
          <a href="signup.html" />
        </button>
      </div>
    </form>
    <div id="bottomHalf">
      <button id="emailYes" type="submit">
        Create Account
      </button>
      <p>
        Already have an account? <a href="signin.html">Sign in</a>
      </p>
      <h3>
        <span>OR</span>
      </h3>
      <div className="alternate-options">
        <button type="button">
          <div className="icon-text-container">
            <img src="Google_logo.png" alt="Google" />
            <span>Sign up with Google</span>
          </div>
        </button>
        <button type="button">
          <div className="icon-text-container">
            <img src="LinkedIn_logo_initials.png" alt="LinkedIn" />
            <span>Sign up with LinkedIn</span>
          </div>
        </button>
        <button type="button">
          <div className="icon-text-container">
            <img src="Microsoft_logo.png" alt="Microsoft" />
            <span>Sign up with Microsoft</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</>
