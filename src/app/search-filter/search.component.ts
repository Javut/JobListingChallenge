
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/searchFilter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchList: string[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.fetchSearchList();
  }

  fetchSearchList() {
    this.searchList = this.searchService.getAllFilters();
  }

  removeTag(index: number) {
    this.searchService.removeFilterTag(index);
  }

  onClear() {
    this.searchService.removeAllFilters();
  }
}
