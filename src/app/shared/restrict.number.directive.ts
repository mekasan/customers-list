import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appRestrictNumber]'
})

export class RestrictNumberDirective {
  regexStr = '^[0-9]';
  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }
}
