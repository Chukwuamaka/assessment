import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
    <div class="flex-container">
      <sidebar class="sidebar"></sidebar>
      <main class="main"></main>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'assessment';
}
