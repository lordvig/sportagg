import {Component} from 'angular2/core';
import {NavBarComponent} from '../shared/navbar.component';

@Component({
    selector: 'ground-layout',
    directives: [NavBarComponent],
    template: `
    <my-navbar></my-navbar>
    `
})
export class GroundLayoutComponent{ }
