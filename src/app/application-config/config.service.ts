import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, timeout } from 'rxjs';
import { environment } from '../../environment.sample';
import { AppConfiguration, ComponentConfigObject } from '../types,interfaces/AppConfiguration';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getConfigFromServer() {
    return this.http.get<AppConfiguration>(environment.configUrl);
  }

  getConfigParsedForInitializer() {
    return this.parseObs(this.getConfigFromServer(), 'App Configuration');
  }

  getComponentConfigFromServer() {
    return this.http.get<ComponentConfigObject>(environment.componentsConfigUrl);
  }

  getComponentConfigsParsedForInitializer() {
    return this.parseObs(this.getComponentConfigFromServer(), 'Components Configuration');
  }

  private parseObs<WhatConfig extends (AppConfiguration | ComponentConfigObject)>(obs: Observable<WhatConfig>, what: string) {
    return obs.pipe(
      timeout(3000),
      retry(5),
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
