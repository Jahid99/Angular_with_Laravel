import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../userinfo';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { UserService } from '../services/user.service';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public default_image:string = '../../assets/img/avatar3.png';

  blood_groups = ['A positive(+)', 'AB negative(-)', 'AB positive(+)', 'B negative(-)', 'B positive(+)', 'O negative(-)', 'O positive(+)'];

  constructor(
    private router: Router,
    private UserService: UserService
  ) { }

  ngOnInit() {
  }



  model = new Userinfo();

  addUser(){
      this.UserService
        .addUser(this.model)
        .subscribe(response => {
        console.log(response);
      } )
    }

    imageUploaded(file: any){
    $('img').hide();
    this.model.photo = file.src;
  }

  imageRemoved(file: any) {
    $('img').show();
  }

}
