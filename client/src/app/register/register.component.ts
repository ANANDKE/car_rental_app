import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // email =''
  // uname =''
  // pswd =''

  constructor(private db:DbService, private router:Router, private formbuilder:FormBuilder) { }


// //validating form
//   registerForm=this.formbuilder.group({email:['',[Validators.required,Validators.pattern('([a-zA-Z0-9. -_]{1,}@[a-zA-Z. -]{2,}[.]{ 1}[a-zA-Z]{2,})')]],
//   uname:['',[Validators.required,Validators.pattern('[a-z]{4-10}')]],
//   pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]{4-10}')]]
// })


registerForm=this.formbuilder.group({
  email:  ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd:['', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
  ]]})

  



  ngOnInit(): void {
  }

  //register function
  register(){
    var email = this.registerForm.value.email
    var uname = this.registerForm.value.uname
    var  pswd = this.registerForm.value.pswd

    if(this.registerForm.valid){
    this.db.register(email,uname,pswd).subscribe((result:any)=>{
      alert(result.message);
      this.router.navigateByUrl('');
    },
    result=>{
      alert(result.error.message)
      this.router.navigateByUrl('');
    }
    )

    // if(result){
    //   alert('Registration Successful')
    //   this.router.navigateByUrl('')    }
    // else{
    //   alert('User already exists..')

    // }

    // }
    // else{
    //   alert('Invalid form')

    // }

    
  }
  else{
    alert("Invalid form");
  }

}
}