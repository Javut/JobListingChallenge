import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../services/jobListing.service';
import { JobList } from '../models/jobList';
import { SearchService } from '../services/searchFilter.service';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss'],
})
export class JobOfferComponent implements OnInit {
  searchTags: string[] = [];
  jobsHttp: JobList[] = [];

  constructor(
    private jobOfferService: JobOfferService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.fetchJobs();
    this.fetchSearchTags();
  }

  fetchJobs() {
    this.jobOfferService.getJobsByHttp().subscribe((data) => {
      this.jobsHttp = data;
    });
  }

  fetchSearchTags() {
    this.searchTags = this.searchService.getAllFilters();
  }

  addToSearchList(element: string) {
    if (!this.searchService.search_list.includes(element)) {
      this.jobOfferService.addToSearchList(element);
    }
  }
}
