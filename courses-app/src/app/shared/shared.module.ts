import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderComponent,
  ButtonComponent,
  CourseCardComponent,
  CourseCardInfoItemComponent,
  CourseListComponent,
  InfoComponent,
  SearchComponent,
  ModalConfirmComponent
} from './components';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  CourseCardComponent,
  CourseCardInfoItemComponent,
  CourseListComponent,
  InfoComponent,
  SearchComponent,
  ModalConfirmComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS, CommonModule],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
