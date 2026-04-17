import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { ContactInfo } from '../../shared/contact-info/contact-info';

@Component({
  selector: 'app-contact-page',
  imports: [Header, ContactInfo],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {}
