import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  copyToClipboard() {
    var copyText = 'valeriia.kuryliak@gmail.com';

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  }
}
