import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
// clear() {
  let clearToken: any;
  clearToken = localStorage.clear();
  clearToken = '';
  console.log(clearToken);
// }
