import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, of } from 'rxjs';
import { ComponentConfigObject } from './types';
import { environment } from '../environment.sample';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getComponentConfigsParsedForInitializer() {
    return forkJoin(
      environment.appIds.split(',').map((appId) => this.getComponentConfigFromServer(appId))
    ).pipe(
      map((configs) => this.mergeConfigs(configs)),
      catchError(({ message }) => {
        console.log('ERROR -------------------------------------');
        console.log('Error downloading configurations');
        if (message) console.error(message);
        console.log('ERROR ------------------------------------- end');
        return of(null);
      })
    );
  }
  private getComponentConfigFromServer(appId: string) {
    return this.http.get<ComponentConfigObject>(environment.jsonConfigPath + '/' + appId + '.json');
  }

  private mergeConfigs(configs: ComponentConfigObject[]): ComponentConfigObject {
    return configs.reduce((acc, config) => ({ ...acc, ...config }), {} as ComponentConfigObject);
  }
}
