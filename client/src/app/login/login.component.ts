import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // uname = ''
  // pswd = ''

  // userDetails:any = {
  //   richu:{username:"richu",email:"richu@gmail.com",password:1111},
  //   michu:{username:"michu",email:"michu@gmail.com",password:2222},
  //   abdu:{username:"abdu",email:"abdu@gmail.com",password:3333}
  // }

  constructor(private router:Router, private db:DbService, private formbuilder:FormBuilder) { }
  loginForm=this.formbuilder.group({ uname:[''], pswd:[''] })

  ngOnInit(): void {
  }

  //login

//   login(){
//     var uname = this.loginForm.value.uname
//     var pswd = this.loginForm.value.pswd
//     if(this.loginForm.valid){

//     this.db.login(uname,pswd).subscribe((result:any)=>{
//       alert(result.error.message)
//       this.router.navigateByUrl('dashboard')

//     },
//     result=>{
//       alert(result.error.message)
//     }
//     )
    
//   }
//   else{
//     alert('Invalid form') 
//   }
// }
login(){
  var uname=this.loginForm.value.uname
  
  var pwd=this.loginForm.value.pswd

  if(this.loginForm.valid){
    this.db.login(uname,pwd).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('dashboard');
    },
    result=>{
      alert(result.error.message)
    })

  

  

 }
 else{
  alert('invalid form')
 }
  
}

}
