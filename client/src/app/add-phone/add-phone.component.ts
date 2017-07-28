import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/phones/`
  });

  newPhone = {
    name: '',
    brand: '',
    specs: []
  };
  feedback:string;

  constructor(public router:Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      this.router.navigate(['/']);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  addSpec(valor){
    this.newPhone.specs.push(valor);
  }

  submit(){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newPhone.name);
      form.append('brand', this.newPhone.brand);
      form.append('specs', JSON.stringify(this.newPhone.specs));
    };

   this.uploader.uploadAll();
  }

}
