import { Directive, HostListener } from '@angular/core';

import * as screenfull from 'screenfull';

@Directive({
  selector: '[appToggleFullscreen]'
})
export class ToggleFullscreenDirective {

  enabled: boolean = false;
  @HostListener('click') onClick() {
    if (screenfull) {
      screenfull.toggle();
    }
  }
}
