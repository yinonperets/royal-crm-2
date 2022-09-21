import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: []
})
export class LoginPageComponent {
  error: boolean = false;
  counter: number = 0;
  threeFaildAttemptsToLogin: boolean = false;

  constructor(private US: UserService, private router: Router) {}
  
  onSubmit(form: NgForm){
    const {value, valid} = form;
    if(valid){
      this.US.loginWithEmailAndPassword(value, (user: any): any=>{
        if(user) {
          this.error = false;
          return this.router.navigate(['/customers']);
        }
        this.error = true;
        form.resetForm();
        setTimeout(()=>{
          this.error = false;
          this.counter++;
        }, 4000);

        if(this.counter === 2){
          this.threeFaildAttemptsToLogin = true;

          setTimeout(()=>{
            this.counter = 0;
            this.threeFaildAttemptsToLogin = false;
          },60_000);
        }
      })
    }
    console.log(value);
    console.log(valid);
  }
    loginWithGoogle(){
    this.US.signupAndLoginWithGoogle((user:any): any =>{
if(user) return this.router.navigate(['/customers']);
    })
  }

  resetForm(form: NgForm){
    form.resetForm();
  }
}