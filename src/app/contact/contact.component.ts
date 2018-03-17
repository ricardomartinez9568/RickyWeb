import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm, NgModel} from '@angular/forms';

class NewForm {
  FirstName: string;
  LastName: string;
  email: string;
  phone: string;
  message: string;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
      },
      err => {
        console.log(err);
      });
  }
}
