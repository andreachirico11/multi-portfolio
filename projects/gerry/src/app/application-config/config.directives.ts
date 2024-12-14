import { Directive, inject, Input, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MpRouteDataExtended, RootComponentConfigObject } from '../../../../../src/app/types';
import { CustomComponentsConfig } from '../components/custom/custom.config';
import { ComponentConfigs } from '../types,interfaces/ComponentConfigs';

@Directive({
  selector: '[mpConfig]',
  standalone: true,
})
export class ConfigDirective {
  private readonly routeData = inject(ActivatedRoute).snapshot.data as MpRouteDataExtended;

  private isChild = false;
  private _childrenIdIndex: number | undefined;

  @Input() set childrenIdIndex(value: number) {
    this.isChild = true;
    this._childrenIdIndex = value;
  }

  getConfig<CTYpe extends ComponentConfigs | CustomComponentsConfig | RootComponentConfigObject>() {
    const {
      resolvedConfigs: { componentConfig, childrenConfigs },
      childrenIds,
    } = this.routeData;
    return (
      this.isChild ? childrenConfigs![childrenIds![this._childrenIdIndex!]] : componentConfig
    ) as CTYpe;
  }
}
