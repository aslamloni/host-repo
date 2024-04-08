import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,Router  } from '@angular/router';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faDonate = faDonate;
  constructor(private router: Router) { }

  redirectToNewUrl() {
    this.router.navigateByUrl('/donate');
  }

}
