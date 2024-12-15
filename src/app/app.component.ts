import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const sections = document.querySelectorAll('section');

    sections.forEach((el: HTMLElement) => {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight * 2;

      if (
        scrollPosition >= offsetPosition
        && scrollPosition < offsetPosition + el.clientHeight
      ) {
        this.updateActiveNavLink(el.id);
      }
    });
  }

  private updateActiveNavLink(activeId: string) {
    const navLinks: any = document.querySelectorAll('nav li a');
    navLinks.forEach((link: HTMLAnchorElement) => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
