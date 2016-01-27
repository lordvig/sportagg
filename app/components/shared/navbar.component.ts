import {Component} from 'angular2/core';

@Component({
    selector: 'my-navbar',
    template:`
        <nav class="navbar navbar-default navbar-static-top navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a href="#" class="navbar-brand logo"><img src="public/images/nav_brand_logo.png" /></a>
            </div>
            <div class="collapse navbar-collapse custom">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">HOME</a></li>
                <li><a href="#">SPORTS</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#" class="login-nav"><div>LOG IN/SIGN UP</div></a></li>
              </ul>
            </div>
          </div>
        </nav>
        `
})
export class NavBarComponent {}
