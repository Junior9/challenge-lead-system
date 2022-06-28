import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../../service/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  users:any=[];
  p: number = 1;
  select:boolean = true;

  ngOnInit(): void {
    this.apiService.get().subscribe(data=>{
      console.log(data)
      this.users = data;
    })
  }

  show(status:boolean){
    this.select = status;
  }

}
