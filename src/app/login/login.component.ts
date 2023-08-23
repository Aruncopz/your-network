import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  signupdata :any;
 logindata :any ;

login= new FormGroup({ 
      'username' : new FormControl(null,Validators.required),
           'password' : new FormControl(null,[Validators.required ,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    });
  router: any;

    ngOnInit(): void {
 

    }
    goTosignuppage() {
      this.router.navigate(['./signuppage']);
    }
  
    goTomainpage() {  
  
      this.router.navigate(['./mainpage']);
    }

    onSubmit(){
      sessionStorage.setItem('User', JSON.stringify(this.login.value));
    
       this.signupdata = localStorage.getItem('User');
       this.logindata = sessionStorage.getItem("User");
       this.signupdata = JSON.parse(this.signupdata);
       this.logindata = JSON.parse(this.logindata)
    
       console.log("This is signupdata  " + this.signupdata.mail)
       console.log("This is login data  " + this.logindata.username)
       this.login.reset();
    
    
      if(this.signupdata.username == this.logindata.username && this.signupdata.password == this.logindata.password){
        this.goTomainpage();
      }
      else{
        alert("Check Your Credentials")
      }
}
}
