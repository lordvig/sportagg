System.register(['angular2/core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NavBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavBarComponent = (function () {
                function NavBarComponent() {
                }
                NavBarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-navbar',
                        template: "\n        <nav class=\"navbar navbar-default navbar-static-top navbar-inverse\">\n          <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n              <a href=\"#\" class=\"navbar-brand logo\"><img src=\"public/images/nav_brand_logo.png\" /></a>\n            </div>\n            <div class=\"collapse navbar-collapse custom\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"#\">HOME</a></li>\n                <li><a href=\"#\">SPORTS</a></li>\n                <li><a href=\"#\">EVENTS</a></li>\n                <li><a href=\"#\">CONTACT US</a></li>\n                <li><a href=\"#\" class=\"login-nav\"><div>LOG IN/SIGN UP</div></a></li>\n              </ul>\n            </div>\n          </div>\n        </nav>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavBarComponent);
                return NavBarComponent;
            }());
            exports_1("NavBarComponent", NavBarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map