import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "./../../service/api.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute,private apiService:ApiService) { }
  id:any;
  user:any={
    name:"",
    email:"",
    gender:"",
    status:""
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.apiService.getById(this.id).subscribe(data=>{
      this.user = data;
    })
  }

}