import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ScrollService} from '../../services/scroll.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-nav-hamburger',
  imports: [AsyncPipe],
  templateUrl: './nav-hamburger.component.html',
  styleUrl: './nav-hamburger.component.scss',
  animations: [
    trigger('crossBtnAnimation', [
      state(
        'closed',
        style({
          transform: 'rotate(0deg) translateY(0px)',
        })
      ),
      state(
        'open',
        style({
          transform: 'rotate(45deg) translate(2px, 6px)',
        })
      ),
      state(
        'open2',
        style({
          transform: 'rotate(-45deg) translate(6px, -6px)',
          width: '100%',
        })
      ),
      transition('closed <=> open', [animate('0.3s ease-in-out')]),
      transition('closed <=> open2', [animate('0.3s ease-in-out')]),
    ]),
    trigger('menuAnimation', [
      state(
        'closed',
        style({
          transform: 'translateX(120%)',
        })
      ),
      state(
        'open',
        style({
          display: 'flex',
          transform: 'translateX(0%)',
        })
      ),
      transition('closed <=> open', [animate('0.3s ease-in-out')]),
    ])
  ],
})
export class NavHamburgerComponent {

  constructor(public scrollService: ScrollService) {}

}
