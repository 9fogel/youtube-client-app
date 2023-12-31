import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/model/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnChanges {
  @Input() searchFilterValue?: string;

  @Input() sortingData: Array<string> | undefined;

  @Input() videos$?: Observable<ISearchItem[]>;

  sortingOption?: string;

  sortingOrder?: string;

  ngOnChanges(): void {
    if (this.sortingData) {
      [this.sortingOption, this.sortingOrder] = this.sortingData;
    }
  }
}
