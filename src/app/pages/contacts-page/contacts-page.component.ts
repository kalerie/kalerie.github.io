import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import {NgIf} from '@angular/common';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-contacts-page',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {
  contactForm: FormGroup;

  isPopupVisible = false;
  isSubmitting = false;
  isSuccess = false;
  isError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      emailjs
        .send(environment.emailServiceID, environment.emailTemplateID, formValues, environment.emailPublicKey)
        .then(() => {
          this.isSuccess = true;
          this.openModal();

          this.contactForm.reset();
        })
        .catch((err) => {
          console.error('EmailJS Error:', err);
          this.isError = true;
        })
        .finally(() => {
          this.isSubmitting = false;

          setTimeout(() => {
            this.closeModal();
          }, 5000);
        });
    }
  }

  openModal() {
    this.isPopupVisible = true;
  }

  closeModal() {
    this.isPopupVisible = false;
  }

}
