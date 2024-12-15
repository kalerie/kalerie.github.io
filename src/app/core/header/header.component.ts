import { Component } from '@angular/core';
import {NavDesktopComponent} from './nav-desktop/nav-desktop.component';
import {NavHamburgerComponent} from './nav-hamburger/nav-hamburger.component';
import {ScrollService} from '../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [NavDesktopComponent, NavHamburgerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public scrollService: ScrollService) {}

}
