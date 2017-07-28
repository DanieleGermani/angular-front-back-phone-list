import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import {routes} from './routes';
import { FormsModule } from '@angular/forms';
import { PhoneService } from '../services/phone.service';
import { FileSelectDirective } from "ng2-file-upload";
import { AddPhoneComponent } from './add-phone/add-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    FileSelectDirective,
    AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
