import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  preventScrolling(): void {
    document.body.classList.add('no-scroll');
  }

  allowScrolling(): void {
    document.body.classList.remove('no-scroll');
  }

}
