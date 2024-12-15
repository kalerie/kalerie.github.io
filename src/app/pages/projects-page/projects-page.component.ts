import { Component } from '@angular/core';
import {PROJECTS} from '../../core/constants/projects.constants';
import {NgForOf, NgIf} from '@angular/common';
import {Project} from '../../core/models/project.model';

@Component({
  selector: 'app-projects-page',
  imports: [NgForOf, NgIf],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {
  myProjects: Project[] = PROJECTS;

  getImageUrl(imageName: string): string {
    return `./assets/${imageName}.png`;
  }
}
