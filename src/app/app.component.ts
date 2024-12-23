import { Component } from '@angular/core';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SalesPersonListComponent]
})
export class AppComponent {
  title = 'This is my first Angular web app!';
}
