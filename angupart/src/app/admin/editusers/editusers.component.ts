import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../userinfo';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

  public default_image:string = '../../assets/img/avatar3.png';
  blood_groups = ['A positive(+)', 'AB negative(-)', 'AB positive(+)', 'B negative(-)', 'B positive(+)', 'O negative(-)', 'O positive(+)'];
  name:string='';
  user:Userinfo;

  constructor(
    private _UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.getOneUser();
    }

    getOneUser() {
      var id = this.route.snapshot.params['id'];

      this._UserService
        .showUser(id)
        .subscribe(getuser => {
          this.user = getuser[0];
          this.user.id = id;

          this.default_image = this.user.photo;
        })
    }

    //function for update
 UpdateUser(){
   this._UserService
   //API call
   .editUser(this.user)
   .subscribe(response => {
     console.log(response);
     this.router.navigate(['/allusers']);
   })

 }

    imageUploaded(file: any){
    $('img').hide();
    this.user.photo = file.src;
  }

  imageRemoved(file: any) {
    $('img').show();
  }

}
