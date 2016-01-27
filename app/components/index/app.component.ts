import {Component} from 'angular2/core'
import {NavBarComponent} from '../shared/navbar.component'
import {GroundLayoutComponent} from '../grounds/ground.component'
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router'

@Component({
    selector: 'my-app',
    directives: [NavBarComponent, RouterOutlet, RouterLink],
    template: `
    <my-navbar></my-navbar>
    <h1>Hello</h1>
    <a router-link='ground'>Grounds</a>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path: '/ground', component: GroundLayoutComponent}
])
export class AppComponent{ }
