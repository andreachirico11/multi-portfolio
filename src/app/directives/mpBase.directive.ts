import { isPlatformBrowser } from '@angular/common';
import { Directive, inject, PLATFORM_ID } from '@angular/core';
import { HostDiretiveType } from '../types,interfaces/HostDirectives';

@Directive({
  selector: '[mpBase]',
  standalone: true,
})
export abstract class MpBaseDirectiveS {
  protected isOnClient = isPlatformBrowser(inject(PLATFORM_ID));
  protected abstract _type: HostDiretiveType;
  public get directiveType() {
    return this._type;
  }
  protected isActivated = false;
  public activate() {
    this.isActivated = true;
  }
}
