import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;

  constructor( public formBuilder: FormBuilder,
               private router: Router,
               private storage: Storage
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

}
