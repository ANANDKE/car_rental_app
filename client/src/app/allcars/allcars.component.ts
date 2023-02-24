import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']
})
export class AllcarsComponent implements OnInit {

  carlist:any
  filtercars:any

  constructor(private db:DbService, private router:Router) { }

  ngOnInit(): void {
    this.db.viewAllProducts().subscribe((data:any)=>{
      // console.log(data);
      this.carlist=data
      
    })
  }

  filter(category:any){
    this.filtercars=this.carlist.filter((item:any)=>{
       if(item.categoryId==category || category==''){
        return item
       }
    })
  }

  reserveCar(){
    alert("Our agent will connect with you soon, Thank You :)")
    this.router.navigateByUrl('allcars');
  }

}
