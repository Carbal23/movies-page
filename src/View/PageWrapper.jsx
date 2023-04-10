export const PageWrapper = ({ children }) => {
  return (
    <>
     
      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>Login</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="password">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <div className="remember">
                <div>
                  <input type="checkbox" name="remember" value="Remember me" />
                  <span>Remember me</span>
                </div>
                <a href="#">Forget password ?</a>
              </div>
            </div>
            <div className="row">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
            <div className="social-btn-2">
              <a className="fb" href="#">
                <i className="ion-social-facebook"></i>Facebook
              </a>
              <a className="tw" href="#">
                <i className="ion-social-twitter"></i>twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="login-wrapper" id="signup-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>sign up</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username-2">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username-2"
                  placeholder="Hugh Jackman"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="email-2">
                your email:
                <input
                  type="password"
                  name="email"
                  id="email-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="password-2">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="repassword-2">
                re-type Password:
                <input
                  type="password"
                  name="password"
                  id="repassword-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>

      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
              <div
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <a href="/">
                <img
                  className="logo"
                  src="images/logo1.png"
                  alt=""
                  width="119"
                  height="58"
                />
              </a>
            </div>

            <div
              className="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <a href="/" className="btn btn-default ">
                    HOME
                  </a>
                </li>
                <li className="dropdown first">
                  <a href="/movie-list" className="btn btn-default ">
                    MOVIES
                  </a>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default " href="/celebrities">
                    CELEBRITIES{" "}
                  </a>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default " href="/blog">
                    BLOG
                  </a>
                </li>
                <li className="dropdown first">
                  <a
                    className="btn btn-default dropdown-toggle lv1"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    COMMUNITY{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li>
                      <a href="/UserFavoriteMovie">user favorite movie</a>
                    </li>
                    <li>
                      <a href="/perfilUsuario">user profile</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right">
                <li className="dropdown first">
                  <a className="btn btn-default " href="/commingsoon">
                    COMMING SOON{" "}
                  </a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li className="loginLink">
                  <a href="#">LOG In</a>
                </li>
                <li className="btn signupLink">
                  <a href="#">sign up</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="top-search">
            <select>
              <option value="united">TV show</option>
              <option value="saab">Others</option>
            </select>
            <input
              type="text"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
            />
          </div>
        </div>
      </header>

      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
      {children}
      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <a href="/">
                <img className="logo" src="images/logo1.png" alt="" />
              </a>
              <p>
                5th Avenue st, manhattan<br></br>
                New York, NY 10001
              </p>
              <p>
                Call us: <a href="#">(+01) 202 342 6789</a>
              </p>
            </div>
            <div className="flex-child-ft item2">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blockbuster</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item3">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item4">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Watchlist</a>
                </li>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">User Guide</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item5">
              <h4>Newsletter</h4>
              <p>
                Subscribe to our newsletter system now <br></br> to get latest
                news from us.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your email..." />
              </form>
              <a href="#" className="btn">
                Subscribe now <i className="ion-ios-arrow-forward"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p>
              <a target="_blank" href="https://www.templateshub.net">
                Templates Hub
              </a>
            </p>
          </div>
          <div className="backtotop">
            <p>
              <a href="#" id="back-to-top">
                Back to top <i className="ion-ios-arrow-thin-up"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
