import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

@Injectable()
export class DummyDataService {
  getData(): Observable<string[]> {
    return of(['Phil', 'Mike', 'Peter']);
  }
}
