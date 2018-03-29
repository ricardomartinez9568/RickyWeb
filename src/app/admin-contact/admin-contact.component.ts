import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';

class NewForm {
  FirstName: string;
  LastName: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {
  public newForm: NewForm;

  constructor(private http: HttpClient) {
    this.newForm = new NewForm();
   }
   sendMessage() {
     console.log(this.newForm);
     console.log('button clicked');
   }
  ngOnInit() {
  this.newForm = new NewForm();
  }

  onSubmit() {
    console.log('submit');
    this.http.post('http://localhost:3000' + '/contact', this.newForm)
    .subscribe(
      result => {
        console.log(result);
        this.newForm = new NewForm();
      },
      err => {
        console.log(err);
        this.newForm = new NewForm();
      });
  }
}
