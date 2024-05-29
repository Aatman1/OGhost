<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <link rel="icon" type="png/jpg" href="ghost_L.png" />
  <link rel="stylesheet" href="styles.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <img className="logo" src="OG_logo.png" alt="Logo" />
  <div className="login-container">
    <div className="login-form">
      <div className="login-header">
        <h1>Sign in</h1>
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
      <form>
        <input type="email" placeholder="Email" required="" />
        <input type="password" placeholder="Password" required="" />
        <a href="#" className="forgot-password">
          Forgot your password?
        </a>
        <button type="submit" className="sign-in-btn">
          SIGN IN
        </button>
      </form>
      <div className="create-account">
        <p>
          Don't have an account? <a href="signup.html">Create one</a>
        </p>
      </div>
    </div>
  </div>
</>
