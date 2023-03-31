import { Component, Input } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input() searchItem: ISearchItem = {} as ISearchItem;
}