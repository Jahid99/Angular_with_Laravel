import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../userinfo';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(
    private _UserService: UserService,

  ) { }

  users:any;

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this._UserService
    .showAllUsers()
    .subscribe(users => {
      this.users = users;
      console.log(this.users);
    })

  }

  deleteUser(id){
     var response = confirm("Are you sure you want to delete this profile? ");
     if (response == true){
       this._UserService
       .deleteUser(id)
       .subscribe(response => {
         console.log(response);
         this.getAllUsers();
       })
     }else {

     }
   }

}
