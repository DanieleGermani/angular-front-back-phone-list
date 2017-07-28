import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable()
export class PhoneActivationService implements CanActivate {

  // constructor(public sessionService:SessionService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let acceso:boolean = true;

    /*
      Ejemplo 1: let acceso = this.sessionService.user ? true : false;
      Ejemplo 2: return this.sessionService.user ? true : false;
    */

    return acceso;
  }
}
