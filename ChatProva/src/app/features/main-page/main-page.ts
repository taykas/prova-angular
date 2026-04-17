import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { ContactInfo } from "../../shared/contact-info/contact-info";

@Component({
  selector: 'app-main-page',
  imports: [Header, ContactInfo],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
