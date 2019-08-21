import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  @Output() toggleMenu = new EventEmitter();
  constructor(private breakpointObserver: BreakpointObserver) {}
}
