import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalConfirmComponent,
  InputValidatorComponent,
} from './components';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreationDateTransformPipe, DurationTransformPipe, StringJoinerTransformPipe} from "./pipes";
import { BoldDirective, TogglePasswordDirective } from './directives';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalConfirmComponent,
  InputValidatorComponent
];

const PIPES = [
  DurationTransformPipe,
  CreationDateTransformPipe,
  StringJoinerTransformPipe
];

const DIRECTIVES = [
  TogglePasswordDirective,
  BoldDirective,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [...COMPONENTS, CommonModule, ...PIPES, ...DIRECTIVES, FontAwesomeModule],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
