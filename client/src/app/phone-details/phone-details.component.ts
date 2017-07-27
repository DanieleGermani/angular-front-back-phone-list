import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  phone:object;
  constructor(private route:ActivatedRoute, private phS:PhoneService) {
    route.params
    .mergeMap( p => phS.get(p.id) )
    .subscribe( phone => {
      console.log(phone);
      this.phone=phone;
    });
  }

  ngOnInit() {
  }

}
