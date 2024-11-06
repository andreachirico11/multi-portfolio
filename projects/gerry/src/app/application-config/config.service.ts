import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ComponentConfigObject } from '../types,interfaces/AppConfiguration';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getComponentConfigFromServer() {
    return this.http.get<ComponentConfigObject>('../../assets/jsonConfigs/jerry-components.json');
  }

  getComponentConfigsParsedForInitializer() {
    return this.parseObs(this.getComponentConfigFromServer(), 'Components Configuration');
  }

  private parseObs<WhatConfig extends (ComponentConfigObject)>(obs: Observable<WhatConfig>, what: string) {
    return obs.pipe(
      catchError(({ message }) => {
        console.log('ERROR -------------------------------------');
        console.log('Error downloading ' + what);
        if (message) console.error(message);
        console.log('ERROR ------------------------------------- end');
        return of(null);
      })
    );
  }
}
