import { PageWrapper } from "./PageWrapper";

export const Proximamente = () => {
  return (
    <PageWrapper>
      <div className="page-single-2">
        <div className="container">
          <div className="row ipad-width">
            <div className="left-content">
             
              <h1>Coming soon</h1>
              <p>We are working hard to get back to you in</p>
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="coming-ct">
                    <div id="clockdiv" className="time">
                      <div className="it-time">
                        <span className="days"></span>
                        <br></br>
                        <p>days</p>
                      </div>

                      <div className="it-time">
                        <span className="hours"></span>
                        <br></br>
                        <p>hours</p>
                      </div>
                      <div className="it-time">
                        <span className="minutes"></span>
                        <br></br>
                        <p>Minutes</p>
                      </div>
                      <div className="it-time">
                        <span className="seconds"></span>
                        <br></br>
                        <p>Seconds</p>
                      </div>
                    </div>
                  </div>
                  <h3>Nofication me</h3>
                  <form action="#">
                    <input
                      className="email"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <input
                      className="redbtn"
                      type="submit"
                      placeholder="subscribe"
                    />
                  </form>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <img
                    className="cm-img"
                    src="images/uploads/cm-img.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
