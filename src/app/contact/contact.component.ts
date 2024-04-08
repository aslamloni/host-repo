import { Component } from '@angular/core';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faPhone=faPhone;
  faEnvelope=faEnvelope;
}
