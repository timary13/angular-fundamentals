import { Component } from '@angular/core';
import { mockedCourseList } from '../../../assets/mock';
import { EMPTY_LIST_INFO_TITLE, EMPTY_LIST_INFO_TEXT } from '../constants';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public userName = 'Jack';
  public courses = mockedCourseList;
  public emptyListInfoTitle = EMPTY_LIST_INFO_TITLE;
  public emptyListInfoText = EMPTY_LIST_INFO_TEXT;

  public isOpenModal = false;

  public openModal() {
    this.isOpenModal = true;
  }

  public closeModal() {
    this.isOpenModal = false;
  }

  public confirmModal(result: any) {
    this.isOpenModal = false;
  }

  public onSearch(value: string) {
  }
}
