import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _isOpen = new BehaviorSubject<boolean>(false);

  isOpen$ = this._isOpen.asObservable();

  scrollToTop(event: Event) {
    this._isOpen.next(false);
    event.preventDefault();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '/');
  }

  scrollToSection(event: Event, sectionId: string) {
    this._isOpen.next(false);
    event.preventDefault();

    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      history.pushState(null, '', `#${sectionId}`);
    }
  }

  toggleMenu() {
    this._isOpen.next(!this._isOpen.value);

    if (this._isOpen.value) {
      this.preventScrolling();
    } else {
      this.allowScrolling();
    }
  }

  preventScrolling(): void {
    document.body.classList.add('no-scroll');
  }

  allowScrolling(): void {
    document.body.classList.remove('no-scroll');
  }

}
