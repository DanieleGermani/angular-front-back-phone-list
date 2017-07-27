import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones:Observable<Array<object>>;
  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.phones = this.phoneService.getList();
  }

}
