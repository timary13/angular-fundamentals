import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholderString = '';
  @Output() search = new EventEmitter();

  public searchValue = '';

  public onSearchClick() {
    if (this.searchValue) {
      this.search.emit(this.searchValue);
    }
  }

}
