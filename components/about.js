export default function about() {
  return (
    <section className="about">
      <div className="container">
        <h3 className="title">About me</h3>
        <div className="about-divider">
          <div className="left">
            <img className="about-img" src="img/p-1.jpg" alt="Profile picture" />
          </div>
          <div className="right">
            <p className="about-text">
              I'm a web developer from Mosul, Iraq with hands on experience in
              ReactJS, NextJS, and NodeJS. I build beatiful websites and
              applications.
            </p>
            <div className="social-buttons">
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
