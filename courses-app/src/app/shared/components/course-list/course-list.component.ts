import {Component, Input, OnInit} from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import {ICourse} from "../../../../dto";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  @Input() courses!: ICourse[];
  @Input() isEditable!: boolean;

  public trashIcon: IconName = 'trash';
  public editIcon: IconName = 'pen';

  constructor() { }

  ngOnInit(): void {
  }

}
