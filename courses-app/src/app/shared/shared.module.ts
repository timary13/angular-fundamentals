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

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [...COMPONENTS, CommonModule, ...PIPES],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
