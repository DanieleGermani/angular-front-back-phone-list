import { Routes } from '@angular/router';

import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { ResolveDetailsGuardService } from '../services/phoneResolve.service';
import { PhoneActivationService } from '../services/phoneActivation.service';

export const routes: Routes = [
    { path: '', component: PhoneListComponent },
    { path: 'add', component: AddPhoneComponent },
    {
      path: 'phone/:id', component: PhoneDetailsComponent,
      canActivate: [PhoneActivationService],
      resolve: {phone: ResolveDetailsGuardService}
    },
    { path: '**', redirectTo: '' }
];
