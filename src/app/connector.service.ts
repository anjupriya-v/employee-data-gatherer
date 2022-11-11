import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectorService {
  send = new Subject();
  constructor() {}
  sendDetails(details: any) {
    this.send.next(details);
  }
}
