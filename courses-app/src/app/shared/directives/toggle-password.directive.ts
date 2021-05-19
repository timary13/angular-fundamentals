import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[togglePassword]',
    exportAs: 'togglePassword',
})
export class TogglePasswordDirective {
    public isHidden = false;

    constructor(private el: ElementRef) {
        this.setup();
    }

    private toggle(input: HTMLElement) {
        this.isHidden = !this.isHidden;
        this.isHidden ? this.setHidden(input) : this.setVisible(input);
    }

    private setVisible(input: HTMLElement) {
        this.el.nativeElement.setAttribute('type', 'text');
    }

    private setHidden(input: HTMLElement) {
        this.el.nativeElement.setAttribute('type', 'password');
    }

    private setup() {
        const sibling = this.el.nativeElement.previousSibling;
        sibling.addEventListener('click', () => {
            this.toggle(sibling);
        });
    }
}