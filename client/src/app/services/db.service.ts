import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http:HttpClient) { }

  //database
  userDetails:any = {
    richu:{username:"richu",email:"richu@gmail.com",password:1111},
    michu:{username:"michu",email:"michu@gmail.com",password:2222},
    abdu:{username:"abdu",email:"abdu@gmail.com",password:3333}
  }

  register(email:any, uname:any, pswd:any){

    const data = {
      email,uname,pswd
    }
    return this.http.post('http://localhost:3000/register',data)

    // var userDetails = this.userDetails
    // if(uname in userDetails){
    //   return false
    // }
    // else{ 
    //   userDetails[uname]={uname,email:email,password:pswd}
    //   console.log(userDetails);
      
    //   return true
    // }

  }

   //login
   login(uname:any, pswd:any){
    
    const data = {
      uname,pswd
    }
    return this.http.post('http://localhost:3000/login',data)

  }

  //http request view all products
  viewAllProducts() {
    return this.http.get("http://localhost:3001/cars")
  }


}
