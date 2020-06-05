import { Component } from '@angular/core';

@Component({
  selector: 'amd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webapp';
  navLinks = [
    { route: 'auth', label: 'Login' },
    { route: '/', label: 'Dashboard' },
    { route: 'products', label: 'Produtos' },
  ];
}
