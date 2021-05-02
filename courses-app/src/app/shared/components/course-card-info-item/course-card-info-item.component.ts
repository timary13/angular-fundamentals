import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-card-info-item',
  templateUrl: './course-card-info-item.component.html',
  styleUrls: ['./course-card-info-item.component.scss']
})
export class CourseCardInfoItemComponent implements OnInit {
  @Input() name!: string;
  @Input() value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
