import { Component } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0, scale: 0.7}),
        animate('400ms ease-in', style({opacity: 1, scale: 1}))
      ])
    ])
  ]
})
export class ProfilePageComponent {

}
