import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  /*
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="assets/Angular_full_color_logo.svg.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,*/

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
