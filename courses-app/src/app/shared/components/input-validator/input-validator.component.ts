import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.scss']
})
export class InputValidatorComponent implements OnInit {
  @Input() checkIsInvalid!: () => boolean;
  @Input() getErrorMessage!: () => string;

  constructor() { }

  ngOnInit(): void {
  }

}
