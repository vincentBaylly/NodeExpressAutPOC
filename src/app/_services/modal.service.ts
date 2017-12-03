import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear modal on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear modal
          this.subject.next(false);
        }
      }
    });
  }

  show(){
    this.subject.next(true);
  }

  hide(){
    this.subject.next(false);
  }

  getStatus(): Observable<any> {
    return this.subject.asObservable();
  }
}
