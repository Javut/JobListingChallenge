import { Injectable } from '@angular/core';
import { SearchService } from './searchFilter.service';
import { HttpClient } from '@angular/common/http';
import { JobList } from '../models/jobList';

@Injectable()
export class JobOfferService {
  private _url: string = '../assets/data.json';

  constructor(private searchService: SearchService, private http: HttpClient) {}

  getJobsByHttp() {
    return this.http.get<JobList[]>(this._url);
  }

  addToSearchList(element: string) {
    this.searchService.addFilterTag(element);
  }
}
