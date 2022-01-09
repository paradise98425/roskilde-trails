import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    username: '',
    password: '',
    email: '',
  };

  users: User[];

  username = '';
  message = '';

  registerForm: FormGroup;
  isSubmitted = false;

  constructor( public formBuilder: FormBuilder,
               private router: Router,
               private storage: Storage,
               private userService: UserService
               ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    })
    this.storage.create();
  }

  get errorControl() {
    return this.registerForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.registerForm.value.username);
      this.storage.set('name', this.registerForm.value.username);
      this.router.navigateByUrl('/home');
    }
  }

 //add user
 addUser() {
  const data = {
    username: this.user.username,
    password: this.user.password,
    email: this.user.email
  };
  this.userService.create(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
}

}
