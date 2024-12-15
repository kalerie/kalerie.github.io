import {Component} from '@angular/core';
import {ProfilePageComponent} from '../profile-page/profile-page.component';
import {ProjectsPageComponent} from '../projects-page/projects-page.component';
import {AboutPageComponent} from '../about-page/about-page.component';
import {ContactsPageComponent} from '../contacts-page/contacts-page.component';

@Component({
  selector: 'app-home-page',
  imports: [ProfilePageComponent, ProjectsPageComponent, AboutPageComponent, ContactsPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
