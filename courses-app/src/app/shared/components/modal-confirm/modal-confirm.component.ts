import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Input() okButtonText!: string;
  @Input() cancelButtonText!: string;

  @Output() confirmResult = new EventEmitter<boolean>();
  @Output() close = new EventEmitter();

  public closeIcon: IconName = 'times';

  public onClose() {
    this.close.emit();
  }

  public confirm(result: any) {
    this.confirmResult.emit(result);
  }
}
