
ReactDOM.render(
  <div className="react-container">
    <nav className="navbar navbar-default navbar-static-top navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" className="navbar-brand logo">SPORT<span className="mblue">AGG</span></a>
        </div>
        <div className="collapse navbar-collapse custom">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#">HOME</a></li>
            <li><a href="#">SPORTS</a></li>
            <li><a href="#">EVENTS</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <div style={{float: "right"}}>
        <a href="/auth"><button className="btn btn-primary">Login</button></a>
        <a href="/auth/logout"><button className="btn btn-primary">Logout</button></a>
      </div>
      <h1>Hello !</h1>
      <h1>Login using the button</h1>
      <div className="image-holder">
        <img src="/images/screenshot_sportagg_main.png" className="image-overlay"></img>
      </div>
    </div>
    <h1>hi</h1>
  </div>,
  document.getElementById('example')
);
