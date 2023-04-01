import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import SearchService from '../../services/search.service';
import FiltersService from '../../services/filters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(
    public router: Router,
    private searchService: SearchService,
    private filtersService: FiltersService,
  ) {}

  @Output() newItemEvent = new EventEmitter<string>();

  @Output() newButtonEvent = new EventEmitter<boolean>();

  searchValue?: string;

  // searchValue = this.searchService.searchValue;

  // private filtersShown = false;

  // private searchRequestSubmitted = false;

  getSearchResults(value: string | undefined): void {
    this.newItemEvent.emit(value);
  }

  openFilters(): void {
    this.filtersService.openFilters();
    // this.changeOpenStatus();
    // this.newButtonEvent.emit(this.filtersShown);
  }

  redirectToMainPage() {
    this.router.navigateByUrl('/youtube');
  }

  submitSearchRequest(value: string | undefined) {
    this.searchService.submitSearchRequest(value);
  }

  // private changeOpenStatus(): void {
  //   this.filtersShown = !this.filtersShown;
  // }
}
