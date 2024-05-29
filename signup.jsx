<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Create Account</title>
  <link href="ghost_L2.png" rel="icon" media="(prefers-color-scheme: light)" />
  <link href="ghost_L.png" rel="icon" media="(prefers-color-scheme: dark)" />
  <link rel="stylesheet" href="styles.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <div className="background-element" id="background-element" />
  <img className="logo" src="OG_logo.png" alt="Logo" />
  <div className="login-container">
    <div className="login-form">
      <div className="login-header">
        <h1>Create an Account</h1>
      </div>
      <div className="social-login">
        <button className="social-btn google">
          <i className="fab fa-google" />
        </button>
        <button className="social-btn linkedin">
          <i className="fab fa-linkedin-in" />
        </button>
        <button className="social-btn microsoft">
          <i className="fab fa-microsoft" />
        </button>
      </div>
      <h3>
        <span>or</span>
      </h3>
      <form id="create-account-form">
        <input
          type="text"
          id="name"
          name="Name"
          placeholder="Full Name"
          required=""
        />
        <div className="phone-container">
          <select
            className="Nation-Code"
            id="countryCode"
            name="countryCode"
            required=""
          >
            <option value="" disabled="" selected="">
              Select Country
            </option>
          </select>
          <input
            type="hidden"
            id="hiddenCountryCode"
            name="hiddenCountryCode"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Mobile Number"
            required=""
          />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required=""
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required=""
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          required=""
        />
        <button type="submit" className="sign-in-btn">
          Create Account
        </button>
        <div className="agree-text">
          <p>
            By accepting to Register on our platform, you agree that you have
            read and accepted our{" "}
            <a href="https://offerghosting.com/terms-of-use/">
              Terms of Service
            </a>
            ,
            <a href="https://offerghosting.com/end-user-license-agreement/">
              Terms of Agreement
            </a>{" "}
            and{" "}
            <a href="https://offerghosting.com/privacy-policy/">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
      <p className="login-link">
        Already have an account? <a href="signin.html">Log In</a>
      </p>
    </div>
  </div>
</>
