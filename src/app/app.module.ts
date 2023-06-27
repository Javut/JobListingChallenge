import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobOfferComponent } from './job-listing/job-offer.component';
import { SearchComponent } from './search-filter/search.component';
import { JobOfferService } from './services/jobListing.service';
import { SearchService } from './services/searchFilter.service';
import { FilterPipe } from './JobFilterPipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobOfferComponent,
    SearchComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [JobOfferService, SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
