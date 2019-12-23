import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DummyDataService {
  getData(): Observable<string[]> {
    return of(['Phil', 'Mike', 'Peter']);
  }
}
