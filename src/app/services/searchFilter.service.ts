
export class SearchService {
  search_list: string[] = [];

  getAllFilters() {
    return this.search_list;
  }

  addFilterTag(element: string) {
    this.search_list.push(element);
  }

  removeFilterTag(index: number) {
    this.search_list.splice(index, 1);
  }

  removeAllFilters() {
    this.search_list.splice(0, this.search_list.length);
  }
}
