import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PhoneService } from './phone.service';

@Injectable()
export class ResolveDetailsGuardService implements Resolve<any> {

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
      return this.phoneService.get(route.params['id'])
        .catch((err) => {
          this.router.navigate(['/']);
          return Observable.of(err);
        });
  }
}
