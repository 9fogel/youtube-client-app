import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-client-app';

  searchValue?: string;

  addItem(newItem: string) {
    this.searchValue = newItem;
  }
}
