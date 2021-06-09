import {Component, Input, OnInit} from '@angular/core';
import { IconName } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() iconName: IconName | undefined;
  @Input() isDisabled: boolean | undefined;

  constructor() {}

  ngOnInit(): void {
  }

}
