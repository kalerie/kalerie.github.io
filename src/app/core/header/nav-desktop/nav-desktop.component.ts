import { Component } from '@angular/core';
import {ScrollService} from '../../services/scroll.service';

@Component({
  selector: 'app-nav-desktop',
  imports: [],
  templateUrl: './nav-desktop.component.html',
  styleUrl: './nav-desktop.component.scss'
})
export class NavDesktopComponent {

  constructor(public scrollService: ScrollService) {}

}
