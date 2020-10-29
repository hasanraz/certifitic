import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-arch';

  constructor(private router: Router) {

  }

  openLogin() {
    this.router.navigate(['/login']);
  }

  openRegistration() {
    this.router.navigate(['/registration']);
  }
}
