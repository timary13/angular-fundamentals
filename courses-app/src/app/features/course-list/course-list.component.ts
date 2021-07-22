import {Component, Input, OnInit} from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { NavigatorService } from 'src/app/services/navigator.service';
import {ICourse} from "../../../dto";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  @Input() courses: ICourse[] = [];
  @Input() isEditable: boolean = false;

  public trashIcon: IconName = 'trash';
  public editIcon: IconName = 'pen';

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit(): void {
  }

  public showCourse(id: any) {
    this.navigatorService.navigateToShowCourse(id);
  }

  public editCourse(id: any) {
    this.navigatorService.navigateToEditCourse(id);
  }
}
