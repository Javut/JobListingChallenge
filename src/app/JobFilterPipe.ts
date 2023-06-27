import { Pipe, PipeTransform } from '@angular/core';
// import { JobOffer } from './job-listing/job-offer';
import { JobList } from './models/jobList';

@Pipe({
  name: 'filterJobOffers',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(jobOffers: JobList[], searchTags: string[]) {
    if (searchTags.length === 0) {
      return jobOffers;
    } else {
      return jobOffers.filter((jobOffer: JobList) => {
        return searchTags.every((singleTag: string) => {
          return (
            jobOffer.role === singleTag ||
            jobOffer.level === singleTag ||
            jobOffer.languages.includes(singleTag) ||
            jobOffer.tools.includes(singleTag)
          );
        });
      });
    }
  }
}
